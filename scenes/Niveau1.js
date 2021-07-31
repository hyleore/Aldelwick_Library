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

    this.load.image('auchinleck1','assets/auchinleck_folio_1r.png')
        
     }

    create(){

        // // si besoin d'un fond différent reprendre ceci :)
        // let background = this.add.graphics();
        // background.fillStyle(0xEFDECD,1.0);
        // background.fillRect(0, 0, 1920, 1080);
        reinitialiseInput();

        // this.add.image(100, 250,'auchinleck1').setScale(1).setOrigin(0);

        // rectangle à remplacer par une image !
        this.add.rectangle(100,250,600,800, 0xa67a60).setOrigin(0);

        correctAnswer = 'réponse correcte ici';

        // // test pour scènes séquencielles de niveaux (fonctionne !)
        // setTimeout(()=>{
        //     this.scene.start('Niveau2')
        // },10000);

    }
    
    update() {
        inputText.on('textchange', function(inputText, e){
            wordChecker();
        });
    }

}

