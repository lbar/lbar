import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRootComponent } from './resume-root.component';

describe('ResumeRootComponent', () => {
  let component: ResumeRootComponent;
  let fixture: ComponentFixture<ResumeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
