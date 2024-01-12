import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntryEditingComponent } from './form-entry-editing.component';

describe('FormEntryEditingComponent', () => {
  let component: FormEntryEditingComponent;
  let fixture: ComponentFixture<FormEntryEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntryEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEntryEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
