
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

        // // test pour scènes séquencielles de niveaux (fonctionne !)
        // setTimeout(()=>{
        //     this.scene.start('Niveau2')
        // },10000);
        content = `Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. \f\n Games can be compiled to iOS, Android and native apps by using 3rd party tools. \f\n You can use JavaScript or TypeScript for development.`;
        textBox.start(content,30);
    }
    
    update() {
        inputText.on('textchange', function(inputText, e){
            wordChecker();
        });
    }

}

