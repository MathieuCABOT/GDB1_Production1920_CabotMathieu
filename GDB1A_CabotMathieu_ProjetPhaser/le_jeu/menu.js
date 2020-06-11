class menu extends Phaser.Scene {
  constructor() {
    super({key: 'menu' });
  }


preload () {

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
    //____________________________________________________________________________________________
    //memory
    this.load.image('fond1B','assets/assets memory/fond_scene1.png');
    this.load.image('fond2B','assets/assets memory/fond_scene2.png');

    this.load.image('virus','assets/assets memory/deuxieme_scene/blanc.png');
    this.load.image('par-feu','assets/assets memory/deuxieme_scene/bleu.png');
    this.load.image('banane','assets/assets memory/deuxieme_scene/vert.png');
    this.load.image('code','assets/assets memory/deuxieme_scene/rouge.png');
    this.load.image('valide','assets/assets memory/deuxieme_scene/validé.png');
    //____________________________________________________________________________________________
    
    
	this.load.image('fondT','assets/fond.png');
}

create () {

	this.add.image(540, 960,'fondT');
	cursors = this.input.keyboard.createCursorKeys();

}

update () {

	if (Phaser.Input.Keyboard.JustDown(cursors.space)){
		this.scene.start("transition");
	} 
		
}

}