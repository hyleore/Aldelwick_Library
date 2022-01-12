class Tuto2 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto2',
        });
    }

    preload(){
        this.load.image('sentence','assets/tutorial_elements/J2D_tutorial_sentence.png');
    }

    create(){
        this.add.image(100, 250,'sentence').setScale(0.8).setOrigin(0);
        content = 'This sentence says "A man greeted a bird on a fine day." \f\n ';
        textBox.start(content,30);
        textBox.on('complete', function() {
            
        }, this); 
    }
    
    update() {
    }

}
