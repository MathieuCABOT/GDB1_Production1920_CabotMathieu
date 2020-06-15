class niveau3 extends Phaser.Scene {
  constructor() {
    super("niveau3");
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

    this.add.image(540, 960,'fondC');


//========================================
//le chronometre
timerA = this.physics.add.sprite(540, 400, 'chrono12');
timerA.direction = 'go';

    this.anims.create({

        key: 'go',
        frames: this.anims.generateFrameNumbers('chrono12', { start: 0, end: 13 }),
        frameRate: 1,
    });


    timerA.anims.play('go', true);

    //---------------------------------------------------------------------
    //chrono
    timer = this.time.addEvent({ delay: 13000, callback: ()=>{

        health = health - 1; 
        this.scene.start("menu");
    }, });
    //---------------------------------------------------------------------

//=======================================================================================
// 1er scene ( boucle dans une boucle)
    //this.g1 = this.add.image(540, 1200,'grille1').setScrollFactor(0);
    let g1 = this.add.image(540, 1200,'grille1');
    this.o1 = this.add.image(540, 600,'obj1').setScrollFactor(0);
    let hit1 = this.add.image(690, 900,'hitbox').setScrollFactor(0);



        //========================================
        //Monne réponse 1
            g1.setInteractive();
            g1.on("pointerup",()=>{
                g1.setTint(0xCC0000);
                perdu = perdu + 1;
    
            })

        //========================================
        //Bonne réponse 1
            hit1.setInteractive();
            hit1.on("pointerover",()=>{
                hit1.setScale(1.1);
            })

            hit1.on("pointerout",()=>{
                hit1.setScale(1);
            })

            hit1.on("pointerup",()=>{
                hit1.setTint(0x00F4FF);
                printhit = printhit + 1;
            })

    
        scene1 = this.time.addEvent({ delay: 4000, callback: ()=>{

            this.o1.setVisible(false);
            g1.destroy();
            hit1.destroy(); 
            
            let g2 = this.add.image(540, 1200,'grille2');
            this.o2 = this.add.image(540, 600,'obj2').setScrollFactor(0);
            let hit2 = this.add.image(540, 1450,'hitbox').setScrollFactor(0);


        //========================================
        //Monne réponse 1
            g2.setInteractive();
            g2.on("pointerup",()=>{
                g2.setTint(0xCC0000);
                perdu = perdu + 1;
            })

        //========================================
        //Bonne réponse 2
            hit2.setInteractive();
            hit2.on("pointerover",()=>{
                hit2.setScale(1.1);
            })

            hit2.on("pointerout",()=>{
                hit2.setScale(1);
            })

            hit2.on("pointerup",()=>{
                hit2.setTint(0x00F4FF);
                printhit = printhit + 1;
            })

                scene2 = this.time.addEvent({ delay: 4000, callback: ()=>{

                    g2.destroy();
                    this.o2.setVisible(false);
                    hit2.destroy(); 
                
                    let g3 = this.add.image(540, 1200,'grille3');
                    this.o3 = this.add.image(540, 600,'obj3').setScrollFactor(0);
                    let hit3 = this.add.image(680, 1330,'hitbox').setScrollFactor(0);


                        //========================================
                        //Monne réponse 1
                        g3.setInteractive();
                        g3.on("pointerup",()=>{
                            g3.setTint(0xCC0000);
                            perdu = perdu + 1;
                        })

                    //========================================
                    //Bonne réponse 3
                        hit3.setInteractive();
                        hit3.on("pointerover",()=>{
                                hit3.setScale(1.1);
                        })

                        hit3.on("pointerout",()=>{
                            hit3.setScale(1);
                        })

                        hit3.on("pointerup",()=>{
                            hit3.setTint(0x00F4FF);
                            printhit = printhit + 1;
                        })
                    
                        }, });

        }, });

}

//========================================================================================================================================================
//evenement en cours de jeu
update () {



    //condition victoire
    if (printhit > 0 && printhit > 0)  {

        this.scene.start("transition");
 
    }

    //condition défaite
    if (perdu > 0)  {
        this.scene.start("menu");
    }


}

}
