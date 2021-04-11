import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSlideSelectorItemComponent } from './resume-slide-selector-item.component';

describe('ResumeSlideSelectorItemComponent', () => {
  let component: ResumeSlideSelectorItemComponent;
  let fixture: ComponentFixture<ResumeSlideSelectorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeSlideSelectorItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSlideSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
