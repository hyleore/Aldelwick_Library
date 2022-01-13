

class Tuto1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto1',
        });
    }

    preload(){
    }

    create(){

        content = 'We’ll be looking at your first book, but first, I need to give you some fundamental guidelines about how to read ancient documents. \f\n ';

        textBox.start(content,30)
        
        textBox.on('complete', function() {
            this.scene.start('Tuto2');
        }, this);        
    }
    
    update() {
    }

}