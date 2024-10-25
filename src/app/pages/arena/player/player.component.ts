import { Component } from '@angular/core';
import { DeckService } from '../../../services/deck.service';
import { iMonster } from '../../../models/i-monsters';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

constructor(private deckSvc:DeckService) {}

playerList!:iMonster[]

playerInGame!:iMonster


ngOnInit() {
  this.deckSvc.deck$.subscribe(list => {
    this.playerList = list
    if(this.playerList) {
      this.playerInGame = this.playerList[0]
    }
  })
}


}
