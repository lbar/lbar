import { Inject, Injectable, InjectionToken } from '@angular/core';
import emailjs from 'emailjs-com';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

export interface ContactRequest {
  contactName: string;
  contactEmail: string;
  subject: string;
  message: string;
}

export interface EmailJsConfig {
  serviceID: string;
  templateID: string;
  userID: string;
}

export const EMAIL_JS_CONFIG = new InjectionToken<EmailJsConfig>('EMAIL_JS_CONFIG');

@Injectable()
export class ContactMeService {
  constructor(@Inject(EMAIL_JS_CONFIG) private emailJsConfig: EmailJsConfig) {
  }

  send(contactRequest: ContactRequest): Observable<string> {
    return fromPromise(
        emailjs.send(this.emailJsConfig.serviceID, this.emailJsConfig.templateID, contactRequest, this.emailJsConfig.userID)
    ).pipe(map(() => contactRequest.contactEmail));
  }
}
