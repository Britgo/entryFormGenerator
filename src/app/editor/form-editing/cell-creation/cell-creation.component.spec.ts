import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCreationComponent } from './cell-creation.component';

describe('CellReationComponent', () => {
  let component: CellCreationComponent;
  let fixture: ComponentFixture<CellCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
