import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoreModule} from '../../core/core.module';
import {ResumeEducationComponent} from './resume-education.component';

describe('ResumeEducationComponent', () => {
    let component: ResumeEducationComponent;
    let fixture: ComponentFixture<ResumeEducationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResumeEducationComponent],
            imports: [CoreModule]
        })
                .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeEducationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
