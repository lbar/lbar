import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data/data.service';

@Component({
    selector: 'app-resume-contact',
    templateUrl: './resume-summary.component.html',
    styleUrls: ['./resume-summary.component.scss']
})
export class ResumeSummaryComponent {

    constructor(public data: DataService) {
    }

}
