import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { ContactMeService } from '../../core/contact-me.service';
import { ResumeContactmeComponent } from './resume-contactme.component';

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
