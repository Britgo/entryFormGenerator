import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCellComponent } from './empty-cell.component';

describe('EmptyCellComponent', () => {
  let component: EmptyCellComponent;
  let fixture: ComponentFixture<EmptyCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
