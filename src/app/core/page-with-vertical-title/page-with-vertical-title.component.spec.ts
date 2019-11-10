import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithVerticalTitleComponent } from './page-with-vertical-title.component';

describe('PageTitleComponent', () => {
  let component: PageWithVerticalTitleComponent;
  let fixture: ComponentFixture<PageWithVerticalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithVerticalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithVerticalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
