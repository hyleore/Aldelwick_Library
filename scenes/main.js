let textBox

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
    this.load.image('minims10','assets/tutorial_elements/minims_anim/J2D_minims_10.png');
    
    this.load.plugin('rextextpageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextextpageplugin.min.js', true);

    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });
    // icone pour le texte
    this.load.image('quill-icon','assets/quill.png');
    
}

create ()  {
    var biblio2 = this.add.image(0,0,'biblio2').setOrigin(0);
    biblio2.displayWidth = config.width; 
    biblio2.displayHeight = config.height;
    // textbox
    var rectangle = this.add.rectangle(0,0,2,2, 0xa67a60);
    var icon = this.add.image(0,0,'quill-icon').setDisplaySize(100,100);
    var bouton = this.add.text(0,0, '➼', {
        color: '#fff',
        fontFamily: 'Courier',
        fontSize: '30px',
        fontStyle: '',
    });
    // text box (version 1)
    textBox = this.rexUI.add.textBox({
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
            fontFamily: 'Trebuchet MS',
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

        page: { 
            maxLines: undefined,
            pageBreak: '\f\n',
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
        // if (this.isLastPage) {
        //     actionIcon.setVisible(false);
        //     return;
        // } else {
            actionIcon.setVisible(true);
        // }
    })

    this.scene.launch('Tuto1');

}

update() {}

}