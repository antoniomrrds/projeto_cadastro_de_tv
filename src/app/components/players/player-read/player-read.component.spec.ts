import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerReadComponent } from './player-read.component';

describe('PlayerReadComponent', () => {
  let component: PlayerReadComponent;
  let fixture: ComponentFixture<PlayerReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
