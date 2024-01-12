import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentNameComponent } from './tournament-name.component';

describe('TournamentNameComponent', () => {
  let component: TournamentNameComponent;
  let fixture: ComponentFixture<TournamentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
