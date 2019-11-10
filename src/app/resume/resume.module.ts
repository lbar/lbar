import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeRootComponent} from './resume-root.component';
import {ResumeIntroductionComponent} from './resume-introduction/resume-introduction.component';
import {ResumeSkillsComponent} from './resume-skills/resume-skills.component';
import {ResumeExperiencesComponent} from './resume-experiences/resume-experiences.component';
import {ResumeEducationComponent} from './resume-education/resume-education.component';
import {ResumeSummaryComponent} from './resume-summary/resume-summary.component';
import {ResumeShortSkillsComponent} from './resume-short-skills/resume-short-skills.component';
import {MatButtonModule, MatExpansionModule, MatIconModule, MatTabsModule} from '@angular/material';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    ResumeRootComponent,
    ResumeIntroductionComponent,
    ResumeSkillsComponent,
    ResumeExperiencesComponent,
    ResumeEducationComponent,
    ResumeSummaryComponent,
    ResumeShortSkillsComponent
  ],
  exports: [
    ResumeRootComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    CoreModule,
    MatExpansionModule
  ]
})
export class ResumeModule {
}
