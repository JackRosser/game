import { Component } from '@angular/core';
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

ngOnInit() {
  this.allSvc.allCard$.subscribe(allCardsList => {
this.cardsList = allCardsList
  })
}

}
