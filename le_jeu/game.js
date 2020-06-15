 //window.onload = function() {

//------------------------------------------------------------------
// taille de fenetre de jeu

const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  backgroundColor: "#f5f5f5",
  parent: "game-container",
  pixelArt: true,

  scene: [menu, transition, niveau1, transition_2, niveau2, transition_3, niveau3],

  physics: {
    default: "arcade",

    arcade: {
      gravity: { y: 0 },
      debug: false
    
    }
  }
};

var game = new Phaser.Game(config);


//------------------------------------------------------------------
//déclaration des variables


    var intro_etpa;
    //menu
    var cursors;
    var start;
    var score;
    var tuto;
    var exit;
    // transition
    var transit;
    var time1;

    //micro jeux 1 (niveau1)
    var timer;
    var timerA;

    var printB1 = 0;
    var printB2 = 0;
    var printB3 = 0;
    
    var perdu = 0;

    //micro jeux 2 (memory)
    var scene1;
    var health = 3;
    var pt1 = 0;
    var pt2 = 0;

    //code-finder
    var scene2;

    var o1;
    var o2;
    var o3;

    var g1;
    var g2;
    var g3;

    var hit1;
    var hit2;
    var hit3;
    var printhit = 0;



    function transi_menu ()
    {
        this.scene.start("niveau1")
    }

