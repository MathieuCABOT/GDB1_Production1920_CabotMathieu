class niveau2 extends Phaser.Scene {
  constructor() {
    super("niveau2");
  }

  preload () {
    //____________________________________________________________________________________________

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
    
 
}

create () {

   //____________________________________________________________________________________________
    //le background   

    this.add.image(540, 960,'fond2B');


//================================================================================

    //bonne
    let B1 = this.add.image(540, 1150,'banane');
    let B2 = this.add.image(540,1350,'code');


//========================================
//Bonne réponse 1
    B1.setInteractive();
	B1.on("pointerover",()=>{
		B1.setScale(1.1);
    })
    
	B1.on("pointerout",()=>{
        B1.setScale(1);

    })

	B1.on("pointerup",()=>{
        B1.setTint(0x00F4FF);
        pt1 = pt1 + 1;
        
	})
//========================================
//Bonne réponse 2
    B2.setInteractive();
	B2.on("pointerover",()=>{
		B2.setScale(1.1);
    })
    
	B2.on("pointerout",()=>{
        B2.setScale(1);

    })
    
	B2.on("pointerup",()=>{
        B2.setTint(0x00F4FF);
        pt2 = pt2 + 1;
        
	})

//========================================

    //mauvaise
    let M1 = this.add.image(540, 950,'virus');
    let M2 = this.add.image(540, 1550,'par-feu');

//========================================
//Monne réponse 1
M1.setInteractive();
M1.on("pointerover",()=>{
    M1.setScale(1.1);
})

M1.on("pointerout",()=>{
    M1.setScale(1);

})

M1.on("pointerup",()=>{
    M1.setTint(0xCC0000);
    perdu = perdu + 1;
    
})
//========================================
//Monne réponse 2
M2.setInteractive();
M2.on("pointerover",()=>{
    M2.setScale(1.1);
})

M2.on("pointerout",()=>{
    M2.setScale(1);

})

M2.on("pointerup",()=>{
    M2.setTint(0xCC0000);
    perdu = perdu + 1;
    
})
//========================================
//le chronometre
timerA = this.physics.add.sprite(540, 740, 'chrono');
timerA.direction = 'go';

    this.anims.create({

        key: 'go',
        frames: this.anims.generateFrameNumbers('chrono', { start: 0, end: 13 }),
        frameRate: 1,
    });


//=======================================================================================
// 1er scene ( boucle dans une boucle)
    this.popup = this.add.image(540, 960,'fond1B').setScrollFactor(0);

        scene1 = this.time.addEvent({ delay: 4000, callback: ()=>{

            this.popup.setVisible(false);    
            timerA.anims.play('go', true);
                //---------------------------------------------------------------------
                //chrono
                timer = this.time.addEvent({ delay: 13000, callback: ()=>{
        
                    health = health - 1; 
                    this.scene.start("menu");
                }, });
                //---------------------------------------------------------------------

    }, });


}

//========================================================================================================================================================
//evenement en cours de jeu
update () {

    //condition victoire
    
    if (pt1 > 0 && pt2 > 0)  {

        this.scene.start("transition_3");
 
    }
    //condition défaite
    if (perdu > 0)  {
        this.scene.start("menu");
    }

//-------------------------------------------------

}


}
