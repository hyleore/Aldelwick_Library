class Tuto5 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto5',
        });
    }

    preload(){
    }

    create(){        
        minims.destroy();
        currentScene = 'Tuto5';
        nextScene = 'Tuto6';
        let content = 'Now, let’s look at some special letters. \f\n Some letters from ancient books are no longer used, or no longer written that way. \f\n ';       
        textBox.start(content,35);

    }
    
    update() {
    }

}