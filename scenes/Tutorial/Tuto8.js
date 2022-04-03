class Tuto8 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto8',
        });
    }

    preload(){
        this.load.image('s','assets/tutorial_elements/J2D_tutorial_s.png');
    }

    create(){
        this.add.image(100, 250,'s').setScale(1).setOrigin(0);
        let content = 'It is the case for the letter ‘s’, which looked similar to an ‘f’ without the smaller vertical stroke. \f\n s'
        textBox.start(content,30);
        textBox.on('complete', function() {
            this.scene.launch('Tuto9');
        }, this);
    }
    
    update() {
    }

}