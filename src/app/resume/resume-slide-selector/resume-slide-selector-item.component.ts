import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[resume-slide-selector-item]',
  templateUrl: './resume-slide-selector-item.component.html',
  styleUrls: ['./resume-slide-selector-item.component.scss'],
})
export class ResumeSlideSelectorItemComponent {
  @Input() anchor: string;
  @Input() ariaLabel: string;

  constructor(private renderer: Renderer2) {
  }

  get isActive(): boolean {
    // const anchorElt = this.renderer.selectRootElement(`#${this.anchor}`);
    // const rect = anchorElt.getBoundingClientRect();
    //
    // return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    // );
    return false;
  }
}
