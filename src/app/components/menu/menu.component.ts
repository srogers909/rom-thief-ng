import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <div class="menuitem first">
        <a [routerLink]="['/home']">Home</a>
      </div>
      <div class="menuitem">
        <a [routerLink]="['/game-grab']">Game Grab</a>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
