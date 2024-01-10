import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDirectorEmailComponent } from './tournament-director-email.component';

describe('TournamentDirectorEmailComponent', () => {
  let component: TournamentDirectorEmailComponent;
  let fixture: ComponentFixture<TournamentDirectorEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDirectorEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentDirectorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
