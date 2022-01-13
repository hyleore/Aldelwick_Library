class Tuto3 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto3',
        });
    }

    preload(){
        this.load.image('minims','assets/tutorial_elements/minims_anim/J2D_minims.png');
        // code png to anim https://labs.phaser.io/edit.html?src=src/animation/animation%20from%20png%20sequence.js&v=3.55.2
    }

    create(){
        this.add.image(100, 250,'minims').setScale(1).setOrigin(0);
        content = 'This is the word ‘minim’. \f\n\ ';
        textBox.start(content,30);
        textBox.on('complete', function() {
            this.scene.start('Tuto3');
        }, this); 
    }
    
    update() {
    }

}