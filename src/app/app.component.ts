import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-wrapper></app-wrapper>
    <div class="content-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
