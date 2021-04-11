import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreModule } from '../core/core.module';
import { ResumeContactmeComponent } from './resume-contactme/resume-contactme.component';
import { ResumeRootComponent } from './resume-root.component';
import { ResumeSlideSelectorItemComponent } from './resume-slide-selector/resume-slide-selector-item.component';
import { ResumeSlideSelectorComponent } from './resume-slide-selector/resume-slide-selector.component';

@NgModule({
  declarations: [ResumeRootComponent, ResumeSlideSelectorComponent, ResumeSlideSelectorItemComponent, ResumeContactmeComponent],
  exports: [ResumeRootComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule.forRoot(), MatSnackBarModule],
})
export class ResumeModule {
}
