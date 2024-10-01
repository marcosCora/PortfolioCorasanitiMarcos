import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resend } from 'resend';
import { log } from 'console';
import { HttpHeaders } from '@angular/common/http';
import { SendEmailService } from '../../services/send-email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private serviceSend : SendEmailService){}

  public resend = new Resend('re_Twobr9g5_7ugVb8PAgjVH6LcTZcopYdPX');


  async send() {
    console.log(this.resend.apiKeys);
    this.serviceSend.sendEmail().subscribe((response)=>{
      console.log(response);
      
    },
    (error)=>{
      console.log(error);
      
    })
    //await this.sendEmail("marcoscorasaniti07@gmail.com", "prueba", "<p>hola probando</p>");
    //this.function();
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization' : `Bearer ${'re_Twobr9g5_7ugVb8PAgjVH6LcTZcopYdPX'}`
        },
        body: JSON.stringify({
          from: "Acme <onboarding@resend.dev>",
          to,
          subject,
          html,
        }),
        mode: 'no-cors', // Development only
      });
  
      console.log('Email sent (no response headers available)');
    } catch (error) {
      console.error(error);
    }
  }

  async function () {
    const { data, error } = await this.resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['marcoscorasaniti07@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
  };
/* 
    async sendEmail(to: string, subject: string, html: string) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization' : `Bearer ${'re_Twobr9g5_7ugVb8PAgjVH6LcTZcopYdPX'}`
          },
          body: JSON.stringify({
            from: "Acme <onboarding@resend.dev>",
            to,
            subject,
            html,
          }),
          mode: 'no-cors', // Development only
        });
    
        console.log('Email sent (no response headers available)');
      } catch (error) {
        console.error(error);
      }
    }
  
    configHeaders(): HttpHeaders{
      return new HttpHeaders({
        'Authorization' : `Bearer ${'re_Twobr9g5_7ugVb8PAgjVH6LcTZcopYdPX'}`
      });
    } */

}






