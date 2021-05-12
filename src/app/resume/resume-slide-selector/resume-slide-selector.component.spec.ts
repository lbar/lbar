import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSlideSelectorComponent } from './resume-slide-selector.component';

describe('ResumeSlideSelectorComponent', () => {
  let component: ResumeSlideSelectorComponent;
  let fixture: ComponentFixture<ResumeSlideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeSlideSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSlideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
