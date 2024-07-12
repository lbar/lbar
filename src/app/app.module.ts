import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ContactMeService, EMAIL_JS_CONFIG } from './core/contact-me.service';
import { DataModule } from './data/data.module';
import { ResumeModule } from './resume/resume.module';

export const APP_ID = 'loicbarbier';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule.withServerTransition({ appId: APP_ID }),
        ResumeModule,
        DataModule.forRoot(),
        BrowserAnimationsModule], providers: [
        {
            provide: EMAIL_JS_CONFIG,
            useValue: environment.emailJs,
        },
        ContactMeService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {
}
