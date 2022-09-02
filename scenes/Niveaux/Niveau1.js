
class Niveau1 extends Phaser.Scene{
    constructor(){
        super('Niveau1')
    }
    

    preload(){
    this.load.image('niv1','assets/J2D_niv1.png');
    this.load.text ('niv1_rep', 'assets/J2d_niv1_rep.txt');
     }

    create(){  
        content = 'Let’s see how you get on with this first page! The first letter is an illuminated ‘A’! Elsewhere, the names ‘Aldenwick’ and ‘Elvenmere’, our town and the sea, are not capitalised. If you need help, click on the button with ‘?’ Click on the arrow when you’re done.';
        reinitialiseInput();

        this.add.image(100, 250,'niv1').setScale(1/3).setOrigin(0);

        correctAnswer = this.cache.text.get('niv1_rep');
        textBox.start(content,35);
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
                this.stop(false);
                var actionIcon = this.getElement('action')
                actionIcon.setVisible(false);
            } else {
            var actionIcon = this.getElement('action')
            {actionIcon.setVisible(true); }
            }
        })
        .on('complete', function() {
            textBox.stop();
        }, this);
            
        
    }
    
    update() {
        inputText.on('textchange', function(inputText, e){
            wordChecker();
        });
    }

}

