let inputText;
let correctAnswer;

class Niveau extends Phaser.Scene {

    constructor () {
        super({
            key: 'Niveau',
        });

    }

init() {}

preload () {
    // plugin pour texte input
    this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);

    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });
    
}

create ()  {
    // var biblio2 = this.add.image(0,0,'biblio2').setOrigin(0);
    // biblio2.width = config.width; // je me réfère à la width de config pour adapter à la taille du jeu!

    // zone de texte input
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
    }).setOrigin(0)
    

    this.scene.launch('Niveau1');

}

update() {}

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
        if(words[i].toLowerCase() == correctAnswer_array[i].toLowerCase()){
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