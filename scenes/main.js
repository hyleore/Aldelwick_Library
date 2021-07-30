let inputText;
let correctAnswer;


class Main extends Phaser.Scene {

    constructor () {
        super({
            key: 'Main',
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

    this.load.image('biblio2','/assets/library2.jpg');
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
        1030, 540, 600, 800, {
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


    var textBox = this.rexUI.add.textBox({
        orientation: 1,

        background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0xD96460), // Game object of background, optional.
        // This background game object will be resized to fit the size of textBox.
        icon: this.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0x000000), // Game object of icon, optional.
        // iconMask: false, // Set true to add a circle mask on icon game object.
        text: this.add.text(0, 0, 'hello', {
            fontFamily: 'Courier',
            fontSize: '16px',
            fontStyle: '',
            maxLines: 3,
            wordWrap: {
                width: 200,
            }
        }), // cf phaser notes for more explanations
        action: this.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0x000000), // Game object of action icon, optional.
        // actionMask: false, // Set true to add a circle mask on action icon game object.
    
        space: {
            // space of bounds
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
    
            icon: 0, // Space between icon game object and text game object.
            text: 0, // Space between text game object and action icon game object.
        },    
    })
    // .setOrigin(0.5)
    .start('content', 100);


    

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
    // console.log('checker est activé')

    for (let i in words) {
        if(words[i].toLowerCase() == correctAnswer_array[i].toLowerCase()){
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