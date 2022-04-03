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
        textBox.start(content,30);
        textBox.on('complete', function() {
            textBox.stop();
            this.scene.launch('Tuto7');
        }, this);
    }
    
    update() {
    }

}