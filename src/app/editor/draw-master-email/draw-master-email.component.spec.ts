import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawMasterEmailComponent } from './draw-master-email.component';

describe('DrawMasterEmailComponent', () => {
  let component: DrawMasterEmailComponent;
  let fixture: ComponentFixture<DrawMasterEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawMasterEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawMasterEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
