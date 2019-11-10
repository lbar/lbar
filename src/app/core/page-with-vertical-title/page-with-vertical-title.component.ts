import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-with-vertical-title',
  templateUrl: './page-with-vertical-title.component.html',
  styleUrls: ['./page-with-vertical-title.component.scss']
})
export class PageWithVerticalTitleComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
