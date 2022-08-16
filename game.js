const config = {
    width: 1920,
    height: 1080,
    backgroundColor: '#EFDECD',
    scene : [Title, Main, Niveau, End, Niveau1, Tuto1, Tuto, Tuto2, Tuto3, Tuto4, Tuto5, Tuto6, Tuto7, Tuto8, Tuto9, Tuto10, Tuto11, Tuto12, Tuto13, Test],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    // lié au plugin pour texte input
    parent: 'jeu',
    dom: {
        createContainer: true
    },
};     

let game = new Phaser.Game(config);