

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  public sendEmail(e: Event) {
    e.preventDefault();

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
  }


}
