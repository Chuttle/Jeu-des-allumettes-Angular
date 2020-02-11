import { Component } from '@angular/core';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: [ './play.component.css' ]
})
export class PlayComponent  {
  // le nombre d'allumettes en jeu
  nombreAllumettes = 0;
  // la quantité minimale et maximale d'allumettes pouvant être générées
  minAllumettes = 7;
  maxAllumettes = 50;
  // le joueur actuel
  actualPlayer = 1;
  // l'état de la partie
  victory=false;

  ngOnInit(){
    // génération aléatoire du nombre d'allumettes
    this.nombreAllumettes = Math.floor(Math.random()*(this.maxAllumettes-this.minAllumettes)+this.minAllumettes);
  }

  play(al){
    // retrait des allumettes
    this.nombreAllumettes-=al;
    // vérification de la condition de fin
    if(this.nombreAllumettes<=0){
      this.nombreAllumettes=0;
      this.victory=true;
    }
    if(this.victory===false){
      // fin du tour
      this.actualPlayer+=1;
      if(this.actualPlayer>2){
        this.actualPlayer=1;
      }
    }
  }
}