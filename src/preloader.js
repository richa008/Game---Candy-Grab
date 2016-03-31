Candy.Preloader = function(game){
    Candy.GAME_WIDTH = 640;
    Candy.GAME_HEIGHT = 960;
}

Candy.Preloader.prototype = {
    preload: function(){
        this.stage.backgroundColor = '#B4D9E7';
        this.preloadBar = this.add.sprite((Candy.GAME_WIDTH - 311)/2, (Candy.GAME_HEIGHT - 27)/2, 'preloaderBar'); //absolute position and name of image
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.image('floor', 'img/floor.png');
        this.load.image('score-bg', 'img/score-bg.png');
        this.load.image('button-pause', 'img/button-pause.png');
        
        this.load.spritesheet('candy', 'img/candy.png', 82, 98); //size of a single image
        this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
    },
    create: function(){
        this.state.start('MainMenu');
    }
}