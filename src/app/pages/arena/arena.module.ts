import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenaRoutingModule } from './arena-routing.module';
import { ArenaComponent } from './arena.component';
import { PlayerComponent } from './player/player.component';
import { OpponentComponent } from './opponent/opponent.component';


@NgModule({
  declarations: [
    ArenaComponent,
    PlayerComponent,
    OpponentComponent
  ],
  imports: [
    CommonModule,
    ArenaRoutingModule
  ]
})
export class ArenaModule { }
