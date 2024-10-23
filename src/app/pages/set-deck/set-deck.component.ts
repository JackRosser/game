import { Component } from '@angular/core';
import { iMonster } from '../../models/i-monsters';

@Component({
  selector: 'app-set-deck',
  templateUrl: './set-deck.component.html',
  styleUrl: './set-deck.component.scss'
})
export class SetDeckComponent {

bigMonster!:iMonster
background:string = "url(/utilities/logo.png)"

  bigCard(monster:iMonster) {
    this.bigMonster = monster
  }

}
