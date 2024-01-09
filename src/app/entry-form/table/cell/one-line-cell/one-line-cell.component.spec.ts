import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLineCellComponent } from './one-line-cell.component';

describe('OneLineCellComponent', () => {
  let component: OneLineCellComponent;
  let fixture: ComponentFixture<OneLineCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLineCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLineCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
