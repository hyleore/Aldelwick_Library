class Tuto11 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto11',
        });
    }

    preload(){
        this.load.image('w','assets/tutorial_elements/J2D_tutorial_w.png');
    }

    create(){
        currentScene = 'Tuto11';
        nextScene = 'Tuto12';
        this.add.image(100, 250,'w').setScale(1).setOrigin(0);
        let content = '‘w’ looked like a strange mix - like an ‘l’ tied with a  ‘b’. You’ll have to learn to recognise it, or help yourself with an alphabet. \f\n Finally, let’s think about punctuation and abbreviations. \f\n '
        textBox.start(content,35);
    }
    
    update() {
    }

}