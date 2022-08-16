class Tuto6 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto6',
        });
    }

    preload(){
        this.load.image('thorn','assets/tutorial_elements/J2D_tutorial_thorn.png');
    }

    create(){
        currentScene = 'Tuto6';
        nextScene = 'Tuto7';
        this.add.image(100, 250,'thorn').setScale(1).setOrigin(0);
        let content = 'This one is called ‘thorn’. It is a runic letter which corresponds to ‘th’. \f\n '
        textBox.start(content,35);
    }
    
    update() {
    }

}