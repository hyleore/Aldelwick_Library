class Tuto6 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto6',
        });
    }

    preload(){
    }

    create(){    
        let content = 'This one is called ‘thorn’. It is a runic letter which corresponds to ‘th’. \f\n '
        textBox.start(content,35);
        textBox.on('complete', function() {
            this.scene.start('Tuto7');
        }, this);
    }
    
    update() {
    }

}