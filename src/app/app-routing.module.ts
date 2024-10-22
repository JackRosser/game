import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: "",
  redirectTo: "start-page",
  pathMatch: "full",
  },
  { path: 'start-page',
    loadChildren: () => import('./pages/start-page/start-page.module').then(m => m.StartPageModule),
    title: "ElementFight! - Start"
  },
  { path: 'set-deck',
    loadChildren: () => import('./pages/set-deck/set-deck.module').then(m => m.SetDeckModule),
  title: "ElementFight! - Deck"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
