import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    FormsModule
  ]
})
export class StartPageModule { }
