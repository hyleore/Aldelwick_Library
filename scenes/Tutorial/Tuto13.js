class Tuto13 extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto13',
        });
    }

    preload(){
        this.load.image('nota','assets/tutorial_elements/J2D_tutorial_nota.png');
    }

    create(){
        this.add.image(100, 250,'nota').setScale(1).setOrigin(0);
        let content = ' This is a tironian nota (⁊). It looks like a number seven, but it is an abbreviation for ‘and’. \f\n In your transcriptions, simply write out the full meaning of abbreviations. \f\n '
        textBox.start(content,30);
        // textBox.on('complete', function() {
        //     this.scene.launch('Tuto12');
        // }, this);
    }
    
    update() {
    }

}