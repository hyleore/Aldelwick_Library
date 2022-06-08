class Tuto9 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto9',
        });
    }

    preload(){
        this.load.image('end s','assets/tutorial_elements/J2D_tutorial_end_s.png');
    }

    create(){
        this.add.image(100, 250,'end s').setScale(1).setOrigin(0);
        let content = 'However, at the end of sentences, ancient scribes already used a serpentine ‘s’ that was similar to ours. \f\n It can look similar to the number 8 because, as the letter is small, the strokes sometimes meet each other. \f\n '
        textBox.start(content,35);
        textBox.on('complete', function() {
            this.scene.start('Tuto10');
        }, this);
    }
    
    update() {
    }

}