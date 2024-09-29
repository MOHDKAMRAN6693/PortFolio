import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Function to handle form submission
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    // // Send mail logic via backend API
    // const formData = this.contactForm.value;

    // this.http.post('https://your-backend-url.com/send-email', formData)
    //   .pipe(catchError((error) => {
    //     console.error('Error occurred while sending email:', error);
    //     return throwError(error);
    //   }))
    //   .subscribe(response => {
    //     console.log('Email sent successfully', response);
    //     this.contactForm.reset();
    //     this.submitted = false;
    //   });
  }
}
