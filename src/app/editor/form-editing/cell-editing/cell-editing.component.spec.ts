import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellEditingComponent } from './cell-editing.component';

describe('CellEditingComponent', () => {
  let component: CellEditingComponent;
  let fixture: ComponentFixture<CellEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
