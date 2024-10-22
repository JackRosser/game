import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDeckRoutingModule } from './set-deck-routing.module';
import { SetDeckComponent } from './set-deck.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SetDeckComponent,
  ],
  imports: [
    CommonModule,
    SetDeckRoutingModule,
    SharedModule

  ]
})
export class SetDeckModule { }
