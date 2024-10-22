import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetDeckComponent } from './set-deck.component';

const routes: Routes = [{ path: '', component: SetDeckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetDeckRoutingModule { }
