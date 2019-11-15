import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-page-with-vertical-title',
    templateUrl: './page-with-vertical-title.component.html',
    styleUrls: ['./page-with-vertical-title.component.scss']
})
export class PageWithVerticalTitleComponent implements OnInit {

    readonly handset$: Observable<boolean>;

    @Input()
    title: string;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.handset$ = breakpointObserver.observe([Breakpoints.Handset]).pipe(
                map(breakpointState => breakpointState.matches)
        );
    }

    ngOnInit() {
    }

}
