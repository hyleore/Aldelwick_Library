let inputText;
let correctAnswer;
var button;
var help;

class Niveau extends Phaser.Scene {

    constructor () {
        super({
            key: 'Niveau',
        });

    }

init() {}

preload () {
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

    // plugin pour texte input
    this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);

    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });

    this.load.image('button','assets/J2D_bouton_aide.png');
    this.load.image('help','assets/J2D_help.png')
    
}


create ()  {

    inputText = this.add.rexInputText(
        // x, y, width, height, config
        750, 250, 600, 800, {
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
    }).setOrigin(0);

    help = null; 
    button = this.add.image(1720, 50,'button').setScale(0.3).setOrigin(0);
    button
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', function (pointer)
    {
        if (help != null) {
            help.destroy();
            help = null;
        } else {
            help = this.add.image(1360, 200, 'help').setScale(0.45).setOrigin(0);
    }
    }, this);

    this.scene.launch('Niveau1');
}

update() {
}

}

// checker si une chaîne est un mot
// source du code de base, modifié : https://codesource.io/building-a-word-counter-in-javascript/
function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
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

function wordChecker(words) {
    var words = inputText.text.split(' ');
    var correctAnswer_array = correctAnswer.split(' ');

    for (let i in words) {
        if(words[i].toLowerCase().replace(/v/g, "u").replace(/j/g, "i") == correctAnswer_array[i].toLowerCase()){
            // https://www.textfixer.com/tutorials/javascript-line-breaks.php
            inputText.setFontColor('green');
        }
        else {
            inputText.setFontColor('red');
        }
      }
}

function reinitialiseInput() {
    inputText.setText('')
}