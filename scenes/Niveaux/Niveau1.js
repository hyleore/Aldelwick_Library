
class Niveau1 extends Phaser.Scene{
    constructor(){
        super('Niveau1')
    }
    

    preload(){

    // barre de progrès, source : https://github.com/photonstorm/phaser3-examples/blob/master/public/src/loader/loader%20events/load%20progress.js
    var progress = this.add.graphics();

    this.load.on('progress', function (value) {

        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(480, 540, 960 * value, 10);

    });

    this.load.on('complete', function () {

        progress.destroy();
    });

    this.load.image('niv1','assets/J2D_niv1.png');
    this.load.text ('niv1_rep', 'assets/J2d_niv1_rep.txt');
     }

    create(){
        reinitialiseInput();

        this.add.image(100, 250,'niv1').setScale(1/3).setOrigin(0);

        correctAnswer = this.cache.text.get('niv1_rep');

        content = 'Please type your transcription. If you need help, click on the button with ‘?’.'
        textBox.start(content,30);
        textBox.on('complete', function() {
            textBox.stop;
        }, this);
    }
    
    update() {
        inputText.on('textchange', function(inputText, e){
            wordChecker();
        });
    }

}

