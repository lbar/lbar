import {Component} from '@angular/core';
import {DataService} from '../../data/data.service';

@Component({
    selector: 'app-resume-summary',
    templateUrl: './resume-summary.component.html',
    styleUrls: ['./resume-summary.component.scss']
})
export class ResumeSummaryComponent {

    constructor(public data: DataService) {
    }

}
