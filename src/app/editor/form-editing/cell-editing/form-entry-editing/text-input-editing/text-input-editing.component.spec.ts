import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputEditingComponent } from './text-input-editing.component';

describe('TextInputEditingComponent', () => {
  let component: TextInputEditingComponent;
  let fixture: ComponentFixture<TextInputEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
