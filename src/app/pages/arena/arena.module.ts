import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenaRoutingModule } from './arena-routing.module';
import { ArenaComponent } from './arena.component';


@NgModule({
  declarations: [
    ArenaComponent
  ],
  imports: [
    CommonModule,
    ArenaRoutingModule
  ]
})
export class ArenaModule { }
