import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ContactMeService, ContactRequest } from '../../core/contact-me.service';
import { MatSnackBar } from '@angular/material/snack-bar';

let nextUniqueId = 1;

@Component({
  selector: 'resume-contactme',
  templateUrl: './resume-contactme.component.html',
  styleUrls: ['./resume-contactme.component.scss'],
})
export class ResumeContactmeComponent {
  contactForm: UntypedFormGroup;
  controlId = `resume-contactme-${nextUniqueId++}`;

  @Output() messageSubmitted = new EventEmitter<void>();

  constructor(fb: UntypedFormBuilder, private contactMe: ContactMeService, private snackBar: MatSnackBar) {
    this.contactForm = fb.group({
      contactName: [undefined, Validators.required],
      contactEmail: [undefined, Validators.email],
      subject: [undefined, Validators.required],
      message: [undefined, Validators.required],
    });
  }

  sendMessage() {
    const contactReq = this.contactForm.value as ContactRequest;
    this.contactMe.send(contactReq).subscribe(
        () => this.sendingSuccess(),
        () => this.sendingFailure()
    );
  }

  private sendingSuccess() {
    this.messageSubmitted.emit();
    this.snackBar.open('Your message has been submitted');
  }

  private sendingFailure() {
    this.snackBar.open('Your message has not been sent. Please try again later.');
  }
}
