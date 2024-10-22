import { Component, Input } from '@angular/core';
import { iMonster } from '../../../models/i-monsters';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {

@Input() bigMonster:iMonster | undefined

}
