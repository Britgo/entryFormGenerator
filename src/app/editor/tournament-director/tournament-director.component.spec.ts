import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDirectorComponent } from './tournament-director.component';

describe('TournamentDirectorComponent', () => {
  let component: TournamentDirectorComponent;
  let fixture: ComponentFixture<TournamentDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
