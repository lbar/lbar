import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeIntroductionComponent } from './resume-introduction.component';

describe('ResumeIntroductionComponent', () => {
  let component: ResumeIntroductionComponent;
  let fixture: ComponentFixture<ResumeIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
