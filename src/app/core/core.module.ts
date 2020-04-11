import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {PageWithVerticalTitleComponent} from './page-with-vertical-title/page-with-vertical-title.component';
import {TitleService} from './title.service';


@NgModule({
    declarations: [PageWithVerticalTitleComponent],
    exports: [
        PageWithVerticalTitleComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                TitleService
            ]
        };
    }
}
