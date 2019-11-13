import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoreModule} from '../../core/core.module';
import {ResumeSummaryComponent} from './resume-summary.component';

describe('ResumeContactComponent', () => {
    let component: ResumeSummaryComponent;
    let fixture: ComponentFixture<ResumeSummaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResumeSummaryComponent],
            imports: [CoreModule]
        })
                .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
