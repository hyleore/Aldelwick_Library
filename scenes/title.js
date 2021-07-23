class Title extends Phaser.Scene {

    constructor () {
        super({
            key: 'Title'
        });
    }

    init() {}
    preload () {
        this.load.image('biblio','/assets/library.jpg');
    }
    create () {
        var biblio = this.add.image(0,0,'biblio').setOrigin(0);
        biblio.width = config.width; // je me réfère à la width de config pour adapter à la taille du jeu!
        this.add.text(config.width/2, config.height/2,'Welcome.',
        { font: "72px Times", fill: "#ffffff", align: "center" })
        .setOrigin(0.5);
        var button = this.add.text(config.width/2,config.height/2+100,
            'Click here to start game.',
            { font: "italic 36px Times", fill: "#ffffff", align: "center" }).setOrigin(0.5);
            
        button.setInteractive({
            useHandCursor: true,
        });

        button.on('pointerdown', pointer => {
            // profitons-en pour récupérer
            // les coordonnées du click...
            let touchX = pointer.x;
            let touchY = pointer.y;
            // et les passer à la scène 3
            // PAS SUR QUE J'AIE BESOIN DE CA
            this.scene.start('Main',[touchX,touchY])
        },this);


    }
    
    update(time, delta) {}

}