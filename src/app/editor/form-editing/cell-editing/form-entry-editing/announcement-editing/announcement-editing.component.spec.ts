import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementEditingComponent } from './announcement-editing.component';

describe('AnnouncementEditingComponent', () => {
  let component: AnnouncementEditingComponent;
  let fixture: ComponentFixture<AnnouncementEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
