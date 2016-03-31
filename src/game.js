Candy.Game = function(game){
    this.candyGroup = null; // Used only in Candy.Game
    this.spawnCandyTimer = 0;
    Candy.scoreText = null; //Can be used in other states and objects
    Candy.score = 0;
    Candy.health = 0;
};

Candy.Game.prototype = {   
    create: function(){       
        this.physics.startSystem(Phaser.Physcis.ARCADE);
        this.physics.arcade.gravity.y = 200;
        this.add.sprite(-30, Candy.GAME_HEIGHT - 160, 'floor');
        this.add.sprite(10, 5, 'score-bg');
        this.add.button(Candy.GAME_WIDTH - 106, 5, 'button-pause', this.managePause, this);        
        this.spawnCandyTimer = 0;
        Candy.health = 10;        
        Candy.scoreText = this.add.text(120, 20, "0");        
        this.candyGroup = this.add.group();
        Candy.item.spawnCandy(this);
    },
    managePause: function(){        
        this.game.paused = true; //Everything is frozen until paused is set to true
        var pausedText = this.add.text(100, 250, "Game paused, Click to continue");
        this.input.onDown.add(function(){
            pausedText.destroy();
            this.game.paused = false;
        }, this);
    },
    update: function(){ //Executed on every frame of the game
        this.spawnCandyTimer += this.time.elapsed;
        if(this.spawnCandyTimer > 1000){ //1000 milliseconds
            this.spawnCandyTimer = 0;
            Candy.item.spawnCandy(this);
        }
        this.candyGroup.forEach(function(candy){
           candy.angle += candy.rotateMe; 
        });
        if(Candy.health <= 0){
            this.game.paused = true;
        }
    }
};

Candy.item = {
    spawnCandy: function(game){
    
    },
    clickCandy: function(game){
            
    },
    removeCandy: function(game){
            
    }    
};