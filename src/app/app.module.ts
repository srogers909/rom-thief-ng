import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UtilitiesService} from "./services";
import {AppComponent} from "./app.component";
import {MenuComponent, WrapperComponent} from "./components";

@NgModule({
  declarations: [
    MenuComponent,
    WrapperComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    UtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
