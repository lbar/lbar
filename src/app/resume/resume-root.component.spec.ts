import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DataModule } from '../data/data.module';
import { ResumeRootComponent } from './resume-root.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

describe('ResumeRootComponent', () => {
  let component: ResumeRootComponent;
  let fixture: ComponentFixture<ResumeRootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeRootComponent],
      imports: [DataModule.forRoot(), RouterModule.forRoot([]), HttpClientTestingModule, MatIconModule, MatTabsModule],
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
