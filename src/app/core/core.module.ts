import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWithVerticalTitleComponent } from './page-with-vertical-title/page-with-vertical-title.component';



@NgModule({
  declarations: [PageWithVerticalTitleComponent],
  exports: [
    PageWithVerticalTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
