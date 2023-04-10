import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownEditorComponent } from './drop-down-editor.component';

describe('DropDownEditorComponent', () => {
  let component: DropDownEditorComponent;
  let fixture: ComponentFixture<DropDownEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
