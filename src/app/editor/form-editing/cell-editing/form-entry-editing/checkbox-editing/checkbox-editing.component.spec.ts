import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditingComponent } from './checkbox-editing.component';

describe('CheckboxEditingComponent', () => {
  let component: CheckboxEditingComponent;
  let fixture: ComponentFixture<CheckboxEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
