import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatExpansionModule, MatIconModule, MatTabsModule} from '@angular/material';
import {CoreModule} from '../core/core.module';
import {DataModule} from '../data/data.module';
import {ResumeEducationComponent} from './resume-education/resume-education.component';
import {ResumeExperiencesComponent} from './resume-experiences/resume-experiences.component';
import {ResumeIntroductionComponent} from './resume-introduction/resume-introduction.component';
import {ResumeRootComponent} from './resume-root.component';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeShortSkillsComponent} from './resume-short-skills/resume-short-skills.component';
import {ResumeSkillsComponent} from './resume-skills/resume-skills.component';
import {ResumeSummaryComponent} from './resume-summary/resume-summary.component';


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
        CoreModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatExpansionModule
    ]
})
export class ResumeModule {
}
