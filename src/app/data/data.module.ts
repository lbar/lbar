import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {DataService} from './data.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class DataModule {
    static forRoot(): ModuleWithProviders<DataModule> {
        return {
            ngModule: DataModule,
            providers: [
                DataService
            ]
        };
    }
}
