Candy.MainMenu = function(game){};

Candy.MainMenu.prototype = {
    create: function(){
        //params
        //position for the button
        //name of button
        //function to be called onClick - this.startGame
        //context in which the function is to be executed
        // 1, 0, 2 are the images in the start-button sprite. onHover, normal and onTouch respectively
        this.add.button(Candy.GAME_WIDTH - 411, Candy.GAME_HEIGHT - 153, 'button-start', this.startGame, this, 1, 0, 2);

    },
    startGame: function(){
        this.state.start('Game');
    }
}