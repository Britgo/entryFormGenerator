import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLinesCellComponent } from './two-lines-cell.component';

describe('TwoLinesCellComponent', () => {
  let component: TwoLinesCellComponent;
  let fixture: ComponentFixture<TwoLinesCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLinesCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoLinesCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
