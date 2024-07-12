import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { DataModule } from '../data/data.module';
import { ResumeRootComponent } from './resume-root.component';

describe('ResumeRootComponent', () => {
  let component: ResumeRootComponent;
  let fixture: ComponentFixture<ResumeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeRootComponent],
      imports: [DataModule.forRoot(), RouterTestingModule.withRoutes([]), HttpClientTestingModule, MatIconModule, MatTabsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
