import { Component } from '@angular/core';
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

ngOnInit() {
  this.deckSvc.deck$.subscribe(list => {
    this.deck = list
  })
}

}
