import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly handset$: Observable<boolean>;

    constructor(breakpointObserver: BreakpointObserver) {
        this.handset$ = breakpointObserver.observe([Breakpoints.Handset]).pipe(
                map(breakpointState => breakpointState.matches)
        );
    }

}
