class Title extends Phaser.Scene {

    constructor () {
        super({
            key: 'Title'
        });
    }

    init() {}
    preload () {
        
    // barre de progrès, source : https://github.com/photonstorm/phaser3-examples/blob/master/public/src/loader/loader%20events/load%20progress.js
    var progress = this.add.graphics();

    this.load.on('progress', function (value) {

        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(480, 540, 960 * value, 10);

    });

    this.load.on('complete', function () {

        progress.destroy();
    });
        this.load.image('biblio','/assets/library.jpg');
    }
    create () {
        var biblio = this.add.image(0,0,'biblio').setOrigin(0);
        biblio.displayWidth = config.width; 
        biblio.displayHeight = config.height;
        this.add.text(config.width/2, config.height/2,'Welcome to Aldelwick Library.',
        { font: "72px Times", fill: "#ffffff", align: "center"})
        .setOrigin(0.5);
        var button = this.add.text(config.width/2,config.height/2+100,
            'Click here to start game.',
            {font: "italic 48px Times", fill: "#ffffff", align: "center", backgroundColor: "#360f0b", padding: 10}).setOrigin(0.5);
            
        button.setInteractive({
            useHandCursor: true,
        });

        button.on('pointerdown', pointer => {
            let touchX = pointer.x;
            let touchY = pointer.y;
            this.scene.start('Main',[touchX,touchY])
        },this);


    }
    
    update(time, delta) {}

}