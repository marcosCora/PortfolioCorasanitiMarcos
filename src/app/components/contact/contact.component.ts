

import { Component } from '@angular/core';
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
export class ContactComponent {

  formEmail : FormGroup = new FormGroup({
    nombre : new FormControl(''),
    email : new FormControl(''),
    mensaje : new FormControl('')
  })


  
  


}
