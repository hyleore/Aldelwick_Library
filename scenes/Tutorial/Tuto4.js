

class Tuto4 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto4',
        });
    }

    preload(){
        this.load.path = 'assets/tutorial_elements/minims_anim/';
        this.load.image('minims11','J2D_minims_11.png');
        this.load.image('minims12','J2D_minims_12.png');
    }

    create(){
        this.add.image(100, 250,'minims10').setScale(1).setOrigin(0);

        this.anims.create({
            key: 'strokes',
            frames: [
                { key: 'minims10' },
                { key: 'minims11' },
                { key: 'minims12' }
            ],
            frameRate: 1,
            repeat: 0,
        });

        this.add.sprite(100, 250, 'minims').setScale(1).setOrigin(0)
            .play('strokes');

        content = 'These are the ancestors of the dot over the ‘i’ \f\n Don’t worry, it’s unlikely that you’ll have words as confusing as this specific one… just remember that if what you’re reading doesn’t seem to make sense, it might be because you are reading a different combination of the minims you see! \f\n ';
        textBox.start(content,30)
        textBox.on('complete', function() {
            this.scene.start('Tuto5');
        }, this);        
    }
    
    update() {
    }

}