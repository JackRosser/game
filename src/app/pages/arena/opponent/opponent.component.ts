import { Component, Input } from '@angular/core';
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



full:string = "p-2 border bg-green-500 transition-all duration-500"
danger:string = "p-2 border bg-orange-400 transition-all duration-500"
death:string = "p-2 border bg-red-600 transition-all duration-500"

cardClass:string = this.full
cardStyle:string = `width: ${this.full}%`



@Input() toggleAnimation!:boolean
@Input() opponentScale!:number
@Input() opponentHpBar!:number

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
