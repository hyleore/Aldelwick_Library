let textBox;
let content;
let icon;
let bouton;
let currentScene;
let nextScene;
function startNextScene(){
    if (nextScene === null){
        textBox.stop();
    }
    else {
        game.scene.start(nextScene);
        game.scene.stop(currentScene);
    }
};

class Main extends Phaser.Scene {

    constructor () {
        super({
            key: 'Main',
        });

    }

init() {}

preload () {
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
    this.load.image('quill-icon','assets/quill.png');
    
}

create ()  {
    var biblio2 = this.add.image(0,0,'biblio2').setOrigin(0);
    biblio2.displayWidth = config.width; 
    biblio2.displayHeight = config.height;
    
    var rectangle = this.add.rectangle(0,0,2,2, 0xa67a60);
    var icon = this.add.image(0,0,'quill-icon').setDisplaySize(100,100);
    var bouton = this.add.text(0,0, '➼', {
        color: '#fff',
        fontFamily: 'Courier',
        fontSize: '30px',
        fontStyle: '',
    })
    
    textBox = this.rexUI.add.textBox({
        x: 100,
        y: 80,
        orientation: 0,
        width: 0,
        height: 0,

        background: rectangle,
        icon: icon, 
        text: this.add.text(0, 0, '', {
            color: '#fff',
            fontFamily: 'Trebuchet MS',
            fontSize: '24px',
            fontStyle: '',
            maxLines: 4,
            wordWrap: {
                width: 1000,
            }
        }),
        action: bouton,
    
        space: {
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

    this.scene.launch('Tuto');

}

update() {
      
}

}