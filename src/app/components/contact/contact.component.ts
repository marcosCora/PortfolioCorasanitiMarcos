

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formEmail !: FormGroup;
  private serviceEmail: EmailService = inject(EmailService);

  public ngOnInit(): void {
    this.formEmail = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }


  sendEmail() {

    console.log(this.formEmail);

    if (!this.formEmail.invalid) {
      let email = {
        name: this.formEmail.controls['name'].value,
        email: this.formEmail.controls['email'].value,
        message: this.formEmail.controls['message'].value,
      };
      this.serviceEmail.postEmail(email).subscribe((response) => {
        console.log(response);
      },
        (error) => {
          console.log(error);
        })
    }
   }




}
