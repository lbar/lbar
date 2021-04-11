import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({left: '-100%'})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({left: '100%'}))]),
      query(':enter', [animate('300ms ease-out', style({left: '0%'}))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);

@Component({
  selector: 'resume-root',
  templateUrl: './resume-root.component.html',
  styleUrls: ['./resume-root.component.scss'],
})
export class ResumeRootComponent {
  readonly handset$: Observable<boolean>;
  contactOpen = false;

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer,
      breakpointObserver: BreakpointObserver,
      private meta: Meta
  ) {
    matIconRegistry.addSvgIcon('app-github', domSanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg'));
    matIconRegistry.addSvgIcon('app-linkedin', domSanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg'));

    this.handset$ = breakpointObserver
        .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape, Breakpoints.TabletPortrait])
        .pipe(map((breakpointState) => breakpointState.matches));
    this.meta.addTag({
      name: 'description',
      content: 'Introduction, skills et experiences of Loïc Barbier, lead full-stack developer Java/Javascript',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Loïc, Barbier, introduction, skills, experiences, full-stack, fullstack, Java, Javascript',
    });
  }

  displayContact() {
    this.contactOpen = true;
  }

  hideContact() {
    this.contactOpen = false;
  }
}
