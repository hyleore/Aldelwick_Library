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
        currentScene = 'Tuto2';
        nextScene = 'Tuto3';
        this.add.image(100, 250,'sentence').setScale(1).setOrigin(0);
        content = ' This sentence says "A man greeted a bird on a fine day." \f\n The writing looks weird, right? In ancient times, people used to write differently. They used quills that had a specific shape, and you can see that their handwriting was influenced by that. \f\n Also keep in mind that some letters might ‘merge’ in a way, because they were writing letters close together. This is the case with the ‘f’ and ‘i’ in the word ‘fine’ here. \f\n The ‘a’ looks a bit strange, but think of it as a printed ‘a’ with a curved stroke at the top. \f\n Also notice how the ‘t’ doesn’t go as high as in modern writing. It’s like a tiny capital T, right? \f\n And as you can see, they didn’t use capital letters a lot. You sometimes find them at the beginning of passages or texts, but not in every sentence. \f\n\ ';       
        textBox.start(content,35);
    }
    
    update() {
    }

}
