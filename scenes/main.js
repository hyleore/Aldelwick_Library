let inputText;
let correctAnswer;
// var content = {'Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development.'}

var content = ['Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. ',
'Games can be compiled to iOS, Android and native apps by using 3rd party tools.',
'You can use JavaScript or TypeScript for development.'];



// var content = {
//     0: 'Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. ',
//     1: 'Games can be compiled to iOS, Android and native apps by using 3rd party tools.',
//     2: 'You can use JavaScript or TypeScript for development.',
// }
var content2 = 'You can use JavaScript or TypeScript for development.';

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
    
    this.load.plugin('rextextpageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextextpageplugin.min.js', true);

    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });
    // icone pour le texte
    this.load.image('yuru-icon','assets/test_icon.jpg');
    
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

    // textbox
    var rectangle = this.add.rectangle(0,0,2,2, 0xa67a60);
    var icon = this.add.image(0,0,'yuru-icon').setDisplaySize(100,100);
    var bouton = this.add.text(0,0, '➼', {
        color: '#fff',
        fontFamily: 'Courier',
        fontSize: '30px',
        fontStyle: '',
    });
    // text box (version 1)
    var textBox = this.rexUI.add.textBox({
        x: 100,
        y: 80,
        orientation: 0,
        width: 0,
        height: 0,

        // background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 20, '#000'), // Game object of background, optional.
        // This background game object will be resized to fit the size of textBox.
        background: rectangle, // n'apparaît pas :((
        icon: icon, // Game object of icon, optional.
        // iconMask: false, // Set true to add a circle mask on icon game object.
        text: this.add.text(0, 0, '', {
            color: '#fff',
            fontFamily: 'Courier',
            fontSize: '24px',
            fontStyle: '',
            maxLines: 4,
            wordWrap: {
                width: 1000,
            }
        }), // cf phaser notes for more explanations
        action: bouton, // Game object of action icon, optional.
        // actionMask: false, // Set true to add a circle mask on action icon game object.
    
        space: {
            // space of bounds
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
    
            icon: 30, // Space between icon game object and text game object.
            text: 20, // Space between text game object and action icon game object.
        },    
    })
    .setOrigin(0)
    .setInteractive()
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
        var actionIcon = this.getElement('action')
        if (this.isLastPage) {
            actionIcon.setVisible(false);
            return;
        } else {
            actionIcon.setVisible(true);
        }
    }).start(content,30);

    // text box (version 2)
    // var textBox = this.rexUI.add.textBox({
    //     x: 1400,
    //     y: 250,
    //     orientation: 0,
    //     width: 0,
    //     height: 0,

    //     background: rectangle, // n'apparaît pas :((
    //     icon: icon.setDisplaySize(70,70), // Game object of icon, optional.
    //     text: this.add.text(0, 0, '', {
    //         color: '#fff',
    //         fontFamily: 'Courier',
    //         fontSize: '12pt',
    //         fontStyle: '',
    //         maxLines: 4,
    //         wordWrap: {
    //             width: 270,
    //         }
    //     }), // cf phaser notes for more explanations
    //     action: bouton, // Game object of action icon, optional.
    //     // actionMask: false, // Set true to add a circle mask on action icon game object.
    
    //     space: {
    //         // space of bounds
    //         left: 10,
    //         right: 10,
    //         top: 10,
    //         bottom: 10,
    
    //         icon: 20, // Space between icon game object and text game object.
    //         text: 10, // Space between text game object and action icon game object.
    //     },    
    // })
    // .setOrigin(0)
    // .setInteractive()
    // .on('type', function() {
    //     var actionIcon = this.getElement('action')
    //     if (this.isTyping) {
    //         actionIcon.setVisible(false);
    //     }
    // },textBox) 
    // .on('pointerdown', function () {
    //     if (this.isTyping) {
    //         this.stop(true);
    //     } else {
    //         actionIcon.setVisible(false);
    //         this.typeNextPage();
    //         actionIcon.setVisible(true);
    //     }
    // }, textBox)
    // .on('pageend', function () {
    //     var actionIcon = this.getElement('action')
    //     if (this.isLastPage) {
    //         actionIcon.setVisible(false);
    //         return;
    //     } else {
    //         actionIcon.setVisible(true);
    //     }
    // })
    // .start(content,60);

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