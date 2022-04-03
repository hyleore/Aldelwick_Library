class Tuto5 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto5',
        });
    }

    preload(){
        this.load.image('thorn','assets/tutorial_elements/J2D_tutorial_thorn.png');
    }

    create(){
        let content = 'Finally, let’s look at some special letters. Some letters from ancient books are no longer used, or no longer wrttten that way. \f\n ';       
        textBox.start(content,30);
        textBox.on('complete', function() {
            textBox.stop();
            this.add.image(100, 250,'thorn').setScale(1).setOrigin(0);
            this.scene.launch('Tuto6');
        }, this);

    }
    
    update() {
    }

}