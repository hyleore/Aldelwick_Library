class Tuto1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto1',
        });
    }
    

    preload(){
        this.load.image('sentence','assets/tutorial_elements/J2D_tutorial_sentence.png');
        console.log('tutorial scene has loaded');;
    }

    create(){
        this.add.image(100, 250,'sentence').setScale(1/3).setOrigin(0);
        console.log('tutorial scene has been created')
    }
    
    update() {
    }

}

content = 'We’ll be looking at your first book, but first, I need to give you some fundamental guidelines about how to read ancient documents. \f\n This says ""';
