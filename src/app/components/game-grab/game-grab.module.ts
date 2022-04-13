import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameGrabRoutingModule } from './game-grab-routing.module';
import { GameGrabComponent } from './game-grab.component';


@NgModule({
  declarations: [
    GameGrabComponent
  ],
  imports: [
    CommonModule,
    GameGrabRoutingModule
  ]
})
export class GameGrabModule { }
