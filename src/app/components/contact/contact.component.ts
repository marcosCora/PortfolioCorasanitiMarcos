

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{

  formEmail !: FormGroup;

  public ngOnInit(): void {
    this.formEmail = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(2)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      message : new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }


   sendEmail() {

    console.log(this.formEmail);
    
    if(!this.formEmail.invalid){
      let email = {
        name : this.formEmail.controls['name'].value,
        email : this.formEmail.controls['email'].value,
        message : this.formEmail.controls['message'].value,
      };

      console.log(email);
    }
    /* 
    emailjs
      .sendForm('service_1dmbec3', 'template_txcnghg', e.target as HTMLFormElement, {
        publicKey: 'Iprp76_bIxSNJRsj3',
        
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
   */}
  
  


}
