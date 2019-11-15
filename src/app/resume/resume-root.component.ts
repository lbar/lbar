import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

@Component({
    selector: 'app-resume-root',
    templateUrl: './resume-root.component.html',
    styleUrls: ['./resume-root.component.scss']
})
export class ResumeRootComponent implements OnInit {

    readonly handset$: Observable<boolean>;

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, breakpointObserver: BreakpointObserver) {
        matIconRegistry.addSvgIcon('app-introduction', domSanitizer.bypassSecurityTrustResourceUrl('../assets/introduction.svg'));
        matIconRegistry.addSvgIcon('app-education', domSanitizer.bypassSecurityTrustResourceUrl('../assets/education.svg'));
        matIconRegistry.addSvgIcon('app-experience', domSanitizer.bypassSecurityTrustResourceUrl('../assets/experience.svg'));
        matIconRegistry.addSvgIcon('app-skill', domSanitizer.bypassSecurityTrustResourceUrl('../assets/skill.svg'));
        matIconRegistry.addSvgIcon('app-github', domSanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg'));
        matIconRegistry.addSvgIcon('app-linkedin', domSanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg'));

        this.handset$ = breakpointObserver.observe([Breakpoints.Handset]).pipe(
                map(breakpointState => breakpointState.matches)
        );
    }

    ngOnInit() {
    }

}
