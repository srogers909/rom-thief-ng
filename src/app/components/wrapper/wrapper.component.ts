import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div>
      <h2><a [routerLink]="['/home']">Rom Thief 2.0</a></h2>
      <app-menu></app-menu>
    </div>
  `,
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
