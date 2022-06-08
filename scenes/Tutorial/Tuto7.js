class Tuto7 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto7',
        });
    }

    preload(){
        this.load.image('thorn and p','assets/tutorial_elements/J2D_tutorial_thorn_and_p.png');
    }

    create(){
        this.add.image(100, 250,'thorn and p').setScale(1).setOrigin(0);
        let content = 'Thorn can be hard to distinguish from ‘p’… \f\n Usually, ‘p’ (on the right) has a straighter vertical stroke and the horizontal stroke which ends the ‘bow’ (the round part) is perpendicular. \f\n On top of the rune ‘thorn’, some letters could be written differently than they are now. \f\n '
        textBox.start(content,35);
        textBox.on('complete', function() {
            this.scene.start('Tuto8');
        }, this);
    }
    
    update() {
    }

}