class Tuto10 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto10',
        });
    }

    preload(){
        this.load.image('spaces','assets/tutorial_elements/J2D_tutorial_spaces.png');
    }

    create(){
        this.add.image(100, 250,'spaces').setScale(1).setOrigin(0);
        let content = 'As an example, the word you see here is ‘spaces’ \f\n Let’s look at another strange letter. \f\n '
        textBox.start(content,30);
        textBox.on('complete', function() {
            this.scene.launch('Tuto11');
        }, this);
    }
    
    update() {
    }

}