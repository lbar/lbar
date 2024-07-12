import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactMeService } from '../../core/contact-me.service';
import { ResumeContactmeComponent } from './resume-contactme.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ResumeContactmeComponent', () => {
  let component: ResumeContactmeComponent;
  let fixture: ComponentFixture<ResumeContactmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeContactmeComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule],
      providers: [
        {
          provide: ContactMeService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
