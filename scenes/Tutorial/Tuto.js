let minims;

class Tuto extends Phaser.Scene{
    constructor(){
        super({
            key: 'Tuto',
        });
    }

    preload(){
        this.load.image ('background', 'assets/tutorial_elements/J2D_tutorial_bg.png')
    }

    create(){
        content = " ";
        this.add.image(100, 250,'background').setScale(1).setOrigin(0);
        textBox
        .on('type', function() {
            var actionIcon = this.getElement('action')
            if (this.isTyping) {
                actionIcon.setVisible(false);
            }
        },textBox) 
        .on('pointerdown', function () {
            if (this.isTyping) {
                this.stop(true);
            } else {
                this.typeNextPage();
            }
        }, textBox)
        .on('pageend', function () { 
            if (this.isLastPage) {
            } else {
            var actionIcon = this.getElement('action')
            {actionIcon.setVisible(true); }
            }
        })
        .on('complete', function() {
            startNextScene();
        }, this);

        this.scene.launch('Tuto1');
    
}
    
    update() {
    }

}