import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AllcardsService } from '../../../services/allcards.service';
import { iMonster } from '../../../models/i-monsters';
import { DeckService } from '../../../services/deck.service';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrl: './card-select.component.scss'
})
export class CardSelectComponent {

constructor(private allSvc:AllcardsService, private deckSvc:DeckService) {}

cardsList!:iMonster[]

cardActive!:iMonster

@Output() sendCounter = new EventEmitter<number>()
@Output() cardToDad = new EventEmitter<iMonster>()
@Input() monsterToLeaveYellow!:iMonster

cardActiveHover(monster:iMonster) {
  this.cardActive = monster
  this.cardToDad.emit(this.cardActive)
}

deckCounter:number = 0

alertTooManyCards:boolean = false

selected(card: iMonster): void {
  if (card.indeck === false && this.deckCounter === 6) {
    this.alertTooManyCards = true;
    return;
  }
  card.indeck = !card.indeck;

  if (card.indeck) {
    this.deckSvc.addCard(card);
    this.deckCounter++;
  } else {
    this.deckSvc.removeCard(card.id);
    this.deckCounter--;
  }
  this.sendCounter.emit(this.deckCounter);
}


closeBtn():void {
  this.alertTooManyCards = !this.alertTooManyCards
}

ngOnInit() {
  this.allSvc.allCard$.subscribe(allCardsList => {
    this.cardsList = allCardsList.sort((a, b) => a.name.localeCompare(b.name));
  });
}

//questa funzione per togliere il bordo giall alla card selezionata

ngOnChanges(changes: SimpleChanges) {
  if (changes['monsterToLeaveYellow'] && this.monsterToLeaveYellow) {
    this.cardsList.forEach(card => {
      if (card.id === this.monsterToLeaveYellow.id) {
        card.indeck = false;
      }
    });
  }
}

}
