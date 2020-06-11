class niveau1 extends Phaser.Scene {
  constructor() {
    super({key: 'niveau1' });
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
    
}

create () {

   //____________________________________________________________________________________________
    //le background   

    this.add.image(540, 960,'fondA');


//================================================================================

    //bonne
    let B1 = this.add.image(870, 1390,'bonne1A');
    let B2 = this.add.image(540,1714,'bonne2A');
    let B3 = this.add.image(210,1390,'bonne3A');

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
        printB1 = printB1 + 1;
        
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
        printB2 = printB2 + 1;
        
	})
//========================================
//Bonne réponse 3
B3.setInteractive();
B3.on("pointerover",()=>{
    B3.setScale(1.1);
})

B3.on("pointerout",()=>{
    B3.setScale(1);

})

B3.on("pointerup",()=>{
    B3.setTint(0x00F4FF);
    printB3 = printB3 + 1;
    
})
//========================================

    //mauvaise
    let M1 = this.add.image(870, 1714,'bad1A');
    let M2 = this.add.image(540, 1390,'bad2A');
    let M3 = this.add.image(210, 1714,'bad3A');

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
//Monne réponse 3
M3.setInteractive();
M3.on("pointerover",()=>{
M3.setScale(1.1);
})

M3.on("pointerout",()=>{
M3.setScale(1);

})

M3.on("pointerup",()=>{
M3.setTint(0xCC0000);
perdu = perdu + 1;

})
//========================================
//le chronometre
timerA = this.physics.add.sprite(540, 1100, 'chrono12');
timerA.direction = 'go';

    this.anims.create({

        key: 'go',
        frames: this.anims.generateFrameNumbers('chrono12', { start: 0, end: 13 }),
        frameRate: 1,
    });

//------------------------------------------------------------------------

    //animation chrono
    timerA.anims.play('go', true);

    // timer chrono
    timer = this.time.addEvent({ delay: 13000, callback: ()=>{
        
        health = health - 1; 
        this.scene.start("menu");
    }, });
//-------------------------------------------------

}

//========================================================================================================================================================
//evenement en cours de jeu
update () {



    //condition victoire
    if (printB1 > 0 && printB2 > 0 && printB3 > 0)  {

        this.scene.start("transition_2");
 
    }
    //condition défaite
    if (perdu > 0)  {
        this.scene.start("transition");
    }

//-------------------------------------------------

}

}
