import { Component } from '@angular/core';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss'
})
export class ArenaComponent {

constructor(private deckSvc:DeckService) {}



}
