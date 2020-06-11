class transition_3 extends Phaser.Scene {
  constructor() {
    super({key: 'transition_3' });
  }


preload () {
//------------------------------------------------------------------------
    this.load.image('fondA','assets/assets_fingerprints/fond.png');
    
    this.load.image('titreA','assets/assets_fingerprints/titreV2.png');
    this.load.image('objectifA','assets/assets_fingerprints/objectif.png');

    this.load.image('bonne1A','assets/assets_fingerprints/bonne_reponse/bonne_reponse1.png');
    this.load.image('bonne2A','assets/assets_fingerprints/bonne_reponse/bonne_reponse2.png');
    this.load.image('bonne3A','assets/assets_fingerprints/bonne_reponse/bonne_reponse3.png');

    this.load.image('bad1A','assets/assets_fingerprints/mauvaise_reponse/mauvaise_reponse1.png');
    this.load.image('bad2A','assets/assets_fingerprints/mauvaise_reponse/mauvaise_reponse2.png');
    this.load.image('bad3A','assets/assets_fingerprints/mauvaise_reponse/mauvaise_reponse3.png');
    this.load.spritesheet('chrono', 'assets/css_sprites.png', { frameWidth: 345, frameHeight: 86 });
    this.load.spritesheet('chrono12', 'assets/css_sprites12sec.png', { frameWidth: 345, frameHeight: 86 });
//------------------------------------------------------------------------
    this.load.spritesheet('transi', 'assets/Spritesheet/spritesheetV3.png', { frameWidth: 1080, frameHeight: 1920 });
//------------------------------------------------------------------------   

}

    create () {
//------------------------------------------------------------------------
// remise a zéro des variables
    printB1 = printB1 * 0;
    printB1 = printB2 * 0;
    printB1 = printB3 * 0;
    perdu = perdu * 0;

//------------------------------------------------------------------------

    transit = this.physics.add.sprite(540, 960, 'transi');
    transit.direction = 'rotate';

//------------------------------------------------------------------------

    this.anims.create({

        key: 'rotate',
        frames: this.anims.generateFrameNumbers('transi', { start: 0, end: 5 }),
        frameRate: 1,

    });

//------------------------------------------------------------------------

    //time1 = this.time.addEvent({ delay: 6000, callback: transi_menu, callbackScope: this, loop: true });
    time1 = this.time.addEvent({ delay: 6000, callback: ()=>{this.scene.start("niveau3")}, });

//------------------------------------------------------------------------

    }

    update () {

        transit.anims.play('rotate', true);
 
    }


}
