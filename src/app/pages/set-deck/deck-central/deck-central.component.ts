import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DeckService } from '../../../services/deck.service';
import { iMonster } from '../../../models/i-monsters';

@Component({
  selector: 'app-deck-central',
  templateUrl: './deck-central.component.html',
  styleUrl: './deck-central.component.scss'
})
export class DeckCentralComponent {

constructor(private deckSvc:DeckService) {}

deck!:iMonster[]

monsterRemoved!: iMonster

@Input() deckCounter!:number

@Output() sendRemovedFromDeck = new EventEmitter<iMonster>



removeFromDeck(card:iMonster) {
card.indeck = !card.indeck
this.deckSvc.removeCard(card.id)
this.monsterRemoved = card
this.startGame = !this.startGame
this.deckCounter--
this.sendRemovedFromDeck.emit(this.monsterRemoved)

}

ngOnInit() {
  this.deckSvc.deck$.subscribe(list => {
    this.deck = list
  })
}

startGame:boolean = false

ngOnChanges(changes: SimpleChanges) {
  if (changes['deckCounter']) {
    if (this.deckCounter === 6) {
      this.startGame = true;
    } else {
      this.startGame = false;
    }
  }
}

}
