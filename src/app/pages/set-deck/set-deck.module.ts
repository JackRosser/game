import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetDeckRoutingModule } from './set-deck-routing.module';
import { SetDeckComponent } from './set-deck.component';


@NgModule({
  declarations: [
    SetDeckComponent
  ],
  imports: [
    CommonModule,
    SetDeckRoutingModule
  ]
})
export class SetDeckModule { }
