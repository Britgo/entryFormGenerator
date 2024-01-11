import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEditingComponent } from './dropdown-editing.component';

describe('DropdownEditingComponent', () => {
  let component: DropdownEditingComponent;
  let fixture: ComponentFixture<DropdownEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
