const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#f5f5f5",
  parent: "game-container",
  pixelArt: true,

  scene: [menu, niveau1, defeat, victory],

  physics: {
    default: "arcade",

    arcade: {
      gravity: { y: 0 },
      debug: true
    
    }
  }
};

var game = new Phaser.Game(config);


//-----------------------------------------------------------------------------------------------------------------------------------------
//déclaration des variables


  var time1;
  var score = 5;



//-----------------------------------------------------------------------------------------------------------------------------------------


//moyens de dire que l'on commence par la Scenes1
    //this.scene.start("niveau1")


//-----------------------------------------------------------------------------------------------------------------------------------------
// les functions
