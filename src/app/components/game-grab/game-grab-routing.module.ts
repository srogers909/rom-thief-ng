import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameGrabComponent} from "./game-grab.component";

const routes: Routes = [
  {
    path: '',
    component: GameGrabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameGrabRoutingModule { }
