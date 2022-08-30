

class Tuto1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto1',
        });
    }

    preload(){
    }

    create(){
        currentScene = 'Tuto1';
        nextScene = 'Tuto2';
        content = " Oh, hi! You must be the new transcriber. Welcome to Aldelwick Library! I hope you had a comfortable journey here. I’m Quill, and I’m in charge of the rewriting project. \f\n\ So! As you must have seen in the letter, your role is to transcribe some of the oldest books and scrolls we have here at Aldelwick library. I know you have no experience, but no need to worry — I will personally give you the necessary training! \f\n\ We’ll be looking at your first book, but first, I need to give you some fundamental guidelines about how to read ancient documents. It is a lot to remember, but don't worry, you will have the help of an alphabet when transcribing. \f\n\ ";
        textBox.start(content, 30);
    }
    
    update() {
    }

}