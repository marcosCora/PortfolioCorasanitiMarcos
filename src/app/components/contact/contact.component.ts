import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resend } from 'resend';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public resend = new Resend('re_123456789');

  
  async send(){
    console.log(this.resend.apiKeys);
    //await this.sendEmail('marcoscorasaniti07@gmail.com', 'prueba', '<p>hola probando</p>');
    this.function();
  }

  async function () {
    const { data, error } = await this.resend.emails.send({
      from: 'maagustin51@gmail.com',
      to: ['marcoscorasaniti07@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
  };

}
  /* async sendEmail(to: string, subject: string, html: string) {
    /*try {
        console.log("holaaa");
        
         const data = await this.resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['maagustin51@gmail.com'],
          subject: 'Hello World',
          html: '<strong>It works!</strong>',
        }); 
        try {
          const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'maagustin51@gmail.com',
              to,
              subject,
              html,
            }),
            mode: 'no-cors', // Development only
          });

        console.log("enviado");
    } catch (error) {
        console.error(error);
    }
} */




