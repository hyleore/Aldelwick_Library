

class Tuto1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto1',
        });
    }

    preload(){
        this.load.image ('background', 'assets/tutorial_elements/J2D_tutorial_bg.png')
    }

    create(){
        content = " Oh, hi! You must be the new transcriber. Welcome to Aldelwick Library! I hope you had a comfortable journey here. I’m Quill, and I’m in charge of the rewriting project. \f\n\ So! As you must have seen in the letter, your role is to transcribe some of the oldest books and scrolls we have here at Aldelwick library. I know you have no experience, but no need to worry — I will personally give you the necessary training! \f\n\ We’ll be looking at your first book, but first, I need to give you some fundamental guidelines about how to read ancient documents. \f\n\ ";
        textBox.start(content,35);
        textBox.on('complete', function() {
            this.scene.start('Tuto2');
        }, this);       
    }
    
    update() {
    }

}