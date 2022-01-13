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
        this.add.image(100, 250,'sentence').setScale(1).setOrigin(0);
        content = 'This sentence says "A man greeted a bird on a fine day." \f\n The writing looks weird, right? In ancient times, people used to write differently. They used quills that had a specific shape, and you can see that their handwriting was influenced by that. \f\n Also keep in mind that some letters might ‘merge’ in a way, because they were writing letters close together. This is the case with the ‘f’ and ‘i’ in the word ‘fine’ here. \f\n The ‘a’ looks a bit strange, but think of it as a printed ‘a’ with a curved stroke at the top. \f\n Also notice how the ‘t’ doesn’t go as high as in modern writing. It’s like a tiny capital T, right? \f\n And as you can see, they didn’t use capital letters a whole lot - they sometimes used them at the beginning of an important passage or a paragraph, and you often find illuminated capitals at the beginning of a page or text, but they didn’t use them to start every sentence like we do now. \f\n Some letters can look very similar when they are mostly made of what we call ‘minims’. \f\n\ ';
        textBox.start(content,30);
        textBox.on('complete', function() {
            this.scene.start('Tuto3');
        }, this); 
    }
    
    update() {
    }

}
