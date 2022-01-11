const config = {
    width: 1920,
    height: 1080,
    backgroundColor: '#EFDECD',
    scene : [Title, Main, Niveau, End, Niveau1, Niveau2, Test],
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