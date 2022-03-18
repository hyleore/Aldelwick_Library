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
        let content = 'This one is called ‘thorn’. It is a runic letter which corresponds to the letters ‘th’. \f\n'
        textBox.start(content,30);
    }
    
    update() {
    }

}