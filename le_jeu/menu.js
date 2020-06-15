class menu extends Phaser.Scene {
  constructor() {
    super({key: 'menu' });
  }

preload () {
    //____________________________________________________________________________________________
    //fingerprints
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
    //code-finder
    this.load.image('fondC','assets/assets code-finder/fond_code-finder.png');
    this.load.image('hitbox','assets/assets code-finder/hitbox.png');

    this.load.image('grille1','assets/assets code-finder/n1/grille.png');
    this.load.image('obj1','assets/assets code-finder/n1/objectif.png');

    this.load.image('grille2','assets/assets code-finder/n2/grille.png');
    this.load.image('obj2','assets/assets code-finder/n2/objectif.png');

    this.load.image('grille3','assets/assets code-finder/n3/grille.png');
    this.load.image('obj3','assets/assets code-finder/n3/objectif.png');
    //____________________________________________________________________________________________
    
    
  this.load.image('fondT','assets/assets_menu/fond_menu.png');
  this.load.image('start','assets/assets_menu/start.png');
  this.load.image('score','assets/assets_menu/score.png');
  this.load.image('tuto','assets/assets_menu/tuto.png');
  this.load.image('exit','assets/assets_menu/exit.png');

}

create () {

  this.add.image(540, 960,'fondT');
  
  // passe-code
  cursors = this.input.keyboard.createCursorKeys();
  
  let start = this.add.image(540, 820,'start');
  let score = this.add.image(540, 1100,'score')
  let tuto = this.add.image(540, 1380,'tuto')
  let exit = this.add.image(540, 1660,'exit')
//--------------------------------------------
  start.setInteractive();
	start.on("pointerover",()=>{
		start.setScale(1.1);
    })
    
	start.on("pointerout",()=>{
        start.setScale(1);

    })

	start.on("pointerup",()=>{
    this.scene.start("transition");      
	})
//--------------------------------------------
  score.setInteractive();
	score.on("pointerover",()=>{
		score.setScale(1.1);
    })
    
	score.on("pointerout",()=>{
        score.setScale(1);

    })

	score.on("pointerup",()=>{
    
  })
//--------------------------------------------
tuto.setInteractive();
tuto.on("pointerover",()=>{
  tuto.setScale(1.1);
  })
  
tuto.on("pointerout",()=>{
      tuto.setScale(1);

  })

tuto.on("pointerup",()=>{
    
})
//--------------------------------------------
exit.setInteractive();
exit.on("pointerover",()=>{
  exit.setScale(1.1);
  })
  
exit.on("pointerout",()=>{
      exit.setScale(1);

  })

exit.on("pointerup",()=>{
  this.physics.pause();    
})
//--------------------------------------------
}

update () {

  //passe-code
  
	if (Phaser.Input.Keyboard.JustDown(cursors.space)){
		this.scene.start("niveau3");
	} 
	
}

}