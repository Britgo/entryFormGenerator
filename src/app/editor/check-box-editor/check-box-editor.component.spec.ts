import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxEditorComponent } from './check-box-editor.component';

describe('CheckBoxEditorComponent', () => {
  let component: CheckBoxEditorComponent;
  let fixture: ComponentFixture<CheckBoxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
