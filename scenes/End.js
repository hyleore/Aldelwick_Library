class End extends Phaser.Scene{
    constructor(){
        super({
            key: 'End',
        });
    }

init(){}

preload(){
    this.scene.stop('Niveau');
    this.scene.stop('Niveau1');
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
}

create(){
    content = "Wonderful! Your transcriber training is now officially over. Thanks for taking part in it!";
    textBox.start(content,35);
    textBox.on('complete', function() {
        var button = this.add.text(config.width/2, config.height/2,
        'Back to Title.',
        {font: "italic 72px Times", fill: "#ffffff", align: "center", backgroundColor: "#4a1e19", padding: 10}).setOrigin(0.5);
        
        button.setInteractive({
            useHandCursor: true,
        });
    
        button.on('pointerdown', pointer => {
            let touchX = pointer.x;
            let touchY = pointer.y;
            this.scene.stop('Main');
            this.scene.start('Title',[touchX,touchY]);
        },this);
    }, this);
}

update(){}
}