class Tuto12 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto12',
        });
    }

    preload(){
        this.load.image('punctus','assets/tutorial_elements/J2D_tutorial_punctus.png');
    }

    create(){
        currentScene = 'Tuto12';
        nextScene = 'Tuto13';
        this.add.image(100, 250,'punctus').setScale(1).setOrigin(0);
        let content = ' The main punctuation used in the manuscripts you will transcribe is the ‘punctus’, which looks like a dot in the middle of the line, often ended with a tail, like this. \f\n Transcribe it as a period (.), but keep in mind that it may have had the function of a period OR a comma. \f\n '
        textBox.start(content,35);
    }
    
    update() {
    }

}