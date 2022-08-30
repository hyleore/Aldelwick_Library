class Tuto3 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto3',
        });
    }

    preload(){
        this.load.path = 'assets/tutorial_elements/minims_anim/';
        this.load.image('minims1','J2D_minims_1.png');
        this.load.image('minims2','J2D_minims_2.png');
        this.load.image('minims3','J2D_minims_3.png');
        this.load.image('minims4','J2D_minims_4.png');
        this.load.image('minims5','J2D_minims_5.png');
        this.load.image('minims6','J2D_minims_6.png');
        this.load.image('minims7','J2D_minims_7.png');
        this.load.image('minims8','J2D_minims_8.png');
        this.load.image('minims9','J2D_minims_9.png');
        // code pour animer à partir d'images png https://labs.phaser.io/edit.html?src=src/animation/animation%20from%20png%20sequence.js&v=3.55.2
    }

    create(){
        currentScene = 'Tuto3';
        nextScene = 'Tuto4';
        this.anims.create({
            key: 'write',
            frames: [
                { key: 'minims1' },
                { key: 'minims2' },
                { key: 'minims3' },
                { key: 'minims4' },
                { key: 'minims5' },
                { key: 'minims6' },
                { key: 'minims7' },
                { key: 'minims8' },
                { key: 'minims9' },
                { key: 'minims10'}
            ],
            frameRate: 2,
            repeat: 0,
        });

        minims = this.add.sprite(100, 250, 'minims').setScale(1).setOrigin(0)
            .play('write');

        content = 'Some letters can look very similar when they are mostly made of what we call ‘minims’. \f\n\ This is the word ‘minim’. \f\n\ Minims are the short, straight, downwards strokes which appear in letters like ‘m’, ‘u’, ‘i’, ‘n’, and ‘v’. \f\n\ (‘u’ and ‘v’ used to be written the same way - in your transcriptions, please use the one most fitting to the meaning of the word, which is usually recognisable through the other letters and words.) \f\n\ As you see, letters with only minims can make a text very confusing. \f\n\ This is made even worse by the fact that they usually didn’t put a dot over ‘i’ - unless it was surrounded by many minims, like here. \f\n\ ';
        textBox.start(content,35);
    }
    
    update() {
    }

}

