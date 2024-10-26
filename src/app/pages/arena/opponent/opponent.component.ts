import { Component } from '@angular/core';
import { DeckService } from '../../../services/deck.service';
import { iMonster } from '../../../models/i-monsters';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrl: './opponent.component.scss'
})
export class OpponentComponent {

constructor(private deckSvc:DeckService) {}

opponentList!:iMonster[]

opponentInGame!:iMonster

// REGOLAZIONE STILE GRAFICO

hpBar:number = 100

full:string = "p-2 border bg-green-500 transition-all duration-500"
danger:string = "p-2 border bg-orange-400 transition-all duration-500"
death:string = "p-2 border bg-red-600 transition-all duration-500"

cardClass:string = this.full
cardStyle:string = `width: ${this.full}%`

scale:number = 1

// REGOLAZIONE STILE GRAFICO


ngOnInit() {
  this.deckSvc.opponent$.subscribe(list => {
    this.opponentList = list
    if(this.opponentList) {
      this.opponentInGame = this.opponentList[0]
    }
  })
}


}
