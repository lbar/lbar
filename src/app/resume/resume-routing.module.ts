import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeEducationComponent} from './resume-education/resume-education.component';
import {ResumeExperiencesComponent} from './resume-experiences/resume-experiences.component';
import {ResumeSkillsComponent} from './resume-skills/resume-skills.component';
import {ResumeSummaryComponent} from './resume-summary/resume-summary.component';


const routes: Routes = [
    {
        path: 'summary',
        component: ResumeSummaryComponent,
        data: {
            title: 'Présentation'
        }
    },
    {
        path: 'skills',
        component: ResumeSkillsComponent,
        data: {
            title: 'Compétences'
        }
    },
    {
        path: 'experiences',
        component: ResumeExperiencesComponent,
        data: {
            title: 'Expériences'
        }
    },
    {
        path: 'education',
        component: ResumeEducationComponent,
        data: {
            title: 'Formation'
        }
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
