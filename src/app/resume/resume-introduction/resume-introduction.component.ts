import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data/data.service';

@Component({
    selector: 'app-resume-introduction',
    templateUrl: './resume-introduction.component.html',
    styleUrls: ['./resume-introduction.component.scss']
})
export class ResumeIntroductionComponent implements OnInit {

    constructor(public data: DataService) {
    }

    ngOnInit() {
    }

}
