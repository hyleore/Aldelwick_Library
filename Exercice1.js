let inputText;
let correctAnswer;

class Exercice1 extends Phaser.Scene{
    constructor(){
        super('Exercice1')
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

        // plugin pour texte input
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
    }

    create(){

        // // si besoin d'un fond différent reprendre ceci :)
        // let background = this.add.graphics();
        // background.fillStyle(0xEFDECD,1.0);
        // background.fillRect(0, 0, 1920, 1080);

        this.add.image(640, 540,'auchinleck1').setScale(1.5);

        // texte input
        inputText = this.add.rexInputText(
            // x, y, width, height, config
            1280, 540, 600, 800, {
            // config de la zone de texte

            // propriétés
            type: 'textarea',
            placeholder: 'type here...',

            // style
            align: 'left',
            padding: '20px',
            border: '10px solid',
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: '24px',
            color: '#331A00',
            backgroundColor: 'white',
            borderColor: '#DEB083',
        })
        .resize(600, 800)
        .setOrigin(0.5);

        correctAnswer = 'Ceci est un texte';
    }
    
    update() {
        // fonction pour checker si une chaîne est un mot https://codesource.io/building-a-word-counter-in-javascript/
        // PAS TERMINÉ DE MODIFIER DONC NE FONCTIONNERA PAS
        function isWord(str) {
            var alphaNumericFound = false;
            for (var i = 0; i < str.length; i++){
              var code = str.charCodeAt(i);
              if ((code > 47 && code < 58) || // numeric (0-9)
                  (code > 64 && code < 91) || // upper alpha (A-Z)
                  (code > 96 && code < 123)) { // lower alpha (a-z)
                alphaNumericFound = true;
                return alphaNumericFound;
              }
            }
            return alphaNumericFound;
          }

        for (var i = 0; i < inputText.length; i++) {
            if (inputText[i] !== ' ' && isWord(inputText[i])) {
            checkAnswer(inputText);
            }
        }

        function checkAnswer(){
        if (inputText != correctAnswer){
            console.log('faux !')
        }
        }
        // bon je pense que je suis pas partie dans la bonne direction là...

    }

}