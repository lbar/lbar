import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperiencesComponent } from './resume-experiences.component';

describe('ResumeExperiencesComponent', () => {
  let component: ResumeExperiencesComponent;
  let fixture: ComponentFixture<ResumeExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
