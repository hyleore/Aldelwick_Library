var content = `Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development.`;


class Test extends Phaser.Scene {

    constructor () {
        super({
            key: 'Test',
        });
    }

    init() {}
    preload () {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        console.log('loaded.');
        this.load.image('yuru-icon','assets/test_icon.jpg');
    }
    create ()  {
        var rectangle = this.add.rectangle(0,0,2,2, 0xa67a60);
        var icon = this.add.image(0,0,'yuru-icon').setDisplaySize(100,100);
        var bouton = this.add.text(0,0, '➼', {
            color: '#fff',
            fontFamily: 'Courier',
            fontSize: '30px',
            fontStyle: '',
        });
        var textBox = this.rexUI.add.textBox({
            x: 100,
            y: 100,
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
                fontSize: '30px',
                fontStyle: '',
                maxLines: 3,
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
        .on('pointerdown', function () {
            var icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true);
            } else {
                this.typeNextPage();
            }
        }, textBox)
        .on('pageend', function () {
            if (this.isLastPage) {
                return;
            }
        })
        .start(content,50);
        console.log('created.');

        var isTyping = textBox.isTyping;
        if (isTyping = true) {
            console.log('Text box is typing.')
        } else if (isTyping = fasle) {
            console.log('Text box is not typing.')
        } else {
            console.log('no value for typing status')
        }
    }
    update() {}

}
