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

// REGOLAZIONE STILE GRAFICO

hpBar:number = 100

full:string = "p-2 border bg-green-500 transition-all duration-500"
danger:string = "p-2 border bg-orange-400 transition-all duration-500"
death:string = "p-2 border bg-red-600 transition-all duration-500"

cardClass:string = this.full
cardStyle:string = `width: ${this.full}%`

scale:number = 1

changeToggle:boolean = false

overChange():void {
  this.changeToggle = !this.changeToggle
}

toggleAnimation:boolean = false

// REGOLAZIONE STILE GRAFICO

battle() {
  this.toggleAnimation = true
  setTimeout(() => {
    this.toggleAnimation = false
  }, 500);
}


ngOnInit() {
  this.deckSvc.deck$.subscribe(list => {
    this.playerList = list
    if(this.playerList) {
      this.playerInGame = this.playerList[0]
    }
  })
}


}
