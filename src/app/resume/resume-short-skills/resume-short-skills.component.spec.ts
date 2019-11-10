import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeShortSkillsComponent } from './resume-short-skills.component';

describe('ResumeShortSkillsComponent', () => {
  let component: ResumeShortSkillsComponent;
  let fixture: ComponentFixture<ResumeShortSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeShortSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeShortSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
