import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeEducationComponent} from './resume-education/resume-education.component';
import {ResumeExperiencesComponent} from './resume-experiences/resume-experiences.component';
import {ResumeSkillsComponent} from './resume-skills/resume-skills.component';
import {ResumeSummaryComponent} from './resume-summary/resume-summary.component';


const routes: Routes = [
    {
        path: 'summary',
        component: ResumeSummaryComponent
    },
    {
        path: 'skills',
        component: ResumeSkillsComponent
    },
    {
        path: 'experiences',
        component: ResumeExperiencesComponent
    },
    {
        path: 'education',
        component: ResumeEducationComponent
    },
    {
        path: 'contact',
        component: ResumeSummaryComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ResumeRoutingModule {
}
