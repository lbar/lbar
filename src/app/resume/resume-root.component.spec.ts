import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatIconModule, MatTabsModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {DataModule} from '../data/data.module';
import {ResumeIntroductionComponent} from './resume-introduction/resume-introduction.component';
import {ResumeRootComponent} from './resume-root.component';
import {ResumeShortSkillsComponent} from './resume-short-skills/resume-short-skills.component';

describe('ResumeRootComponent', () => {
    let component: ResumeRootComponent;
    let fixture: ComponentFixture<ResumeRootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResumeRootComponent, ResumeIntroductionComponent, ResumeShortSkillsComponent],
            imports: [
                DataModule.forRoot(),
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
                MatIconModule,
                MatTabsModule
            ]
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
