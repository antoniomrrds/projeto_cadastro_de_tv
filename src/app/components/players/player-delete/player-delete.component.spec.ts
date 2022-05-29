import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDeleteComponent } from './player-delete.component';

describe('PlayerDeleteComponent', () => {
  let component: PlayerDeleteComponent;
  let fixture: ComponentFixture<PlayerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
