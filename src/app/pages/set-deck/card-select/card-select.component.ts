import { Component, EventEmitter, Output } from '@angular/core';
import { AllcardsService } from '../../../services/allcards.service';
import { iMonster } from '../../../models/i-monsters';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrl: './card-select.component.scss'
})
export class CardSelectComponent {

constructor(private allSvc:AllcardsService) {}

cardsList!:iMonster[]

cardActive!:iMonster

@Output() cardToDad = new EventEmitter<iMonster>()


cardActiveHover(monster:iMonster) {
  this.cardActive = monster
  this.cardToDad.emit(this.cardActive)
}

ngOnInit() {
  this.allSvc.allCard$.subscribe(allCardsList => {
    this.cardsList = allCardsList.sort((a, b) => a.name.localeCompare(b.name));
  });
}


}
