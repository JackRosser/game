import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDeckRoutingModule } from './set-deck-routing.module';
import { SetDeckComponent } from './set-deck.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DeckCentralComponent } from './deck-central/deck-central.component';
import { CardSelectComponent } from './card-select/card-select.component';



@NgModule({
  declarations: [
    SetDeckComponent,
    ViewDetailsComponent,
    DeckCentralComponent,
    CardSelectComponent,
  ],
  imports: [
    CommonModule,
    SetDeckRoutingModule,
    SharedModule

  ]
})
export class SetDeckModule { }
