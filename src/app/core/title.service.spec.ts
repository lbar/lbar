import {Component} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Title} from '@angular/platform-browser';
import {Router, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {TitleService} from './title.service';

@Component({
  template: 'Skills',
})
export class TestSkillsComponent {
}

@Component({
  template: 'Education',
})
export class TestEducationComponent {
}

@Component({
  template: '<router-outlet></router-outlet>',
})
export class TestRootComponent {
  constructor(private title: TitleService) {
  }
}

export const testRoutes: Routes = [
  {
    path: 'skills',
    component: TestSkillsComponent,
    data: {
      title: 'Skills',
    },
  },
  {
    path: '',
    component: TestEducationComponent,
    data: {
      title: 'Education',
    },
  },
];

export const mockTitle = {
  setTitle: jasmine.createSpy('setTitle'),
  getTitle: jasmine.createSpy('getTitle').and.returnValue('Title'),
};

describe('TitleService', () => {
  let service: TitleService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(testRoutes)],
      declarations: [TestRootComponent, TestSkillsComponent, TestEducationComponent],
      providers: [{provide: Title, useValue: mockTitle}, TitleService],
    });

    router = TestBed.inject(Router);
    TestBed.createComponent(TestRootComponent);

    router.initialNavigation();
  });

  it('should be created', () => {
    service = TestBed.inject(TitleService);
    expect(service).toBeTruthy();
  });

  it('should change title', fakeAsync(() => {
    service = TestBed.inject(TitleService);

    router.navigate([]);
    tick();
    expect(router.url).toEqual('/');

    const firstNav = mockTitle.setTitle.calls.mostRecent();
    expect(firstNav).toBeDefined();
    expect(firstNav.args).toContain('Title — Education');

    router.navigate(['skills']);
    tick();
    const secondNav = mockTitle.setTitle.calls.mostRecent();
    expect(secondNav).toBeDefined();
    expect(secondNav.args).toContain('Title — Skills');
  }));
});
