import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGrabComponent } from './game-grab.component';

describe('GameGrabComponent', () => {
  let component: GameGrabComponent;
  let fixture: ComponentFixture<GameGrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameGrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
