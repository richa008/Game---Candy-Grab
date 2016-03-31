var Candy = {};

Candy.Bootoot = function(game){};

Candy.Boot.prototype = {
    //Preload and create are reserved names for functions in Phaser. create() is called after preload()
    preload: function(){
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function(){
        this.input.maxPointers = 1; //We don't use multi touch
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Game fits to given dimensions
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true); //allows scaling
        this.state.start('Preloader'); //Executes preloader 
    }
}