import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http : HttpClient) { }

  sendEmail() : Observable<string>{
    let headers = this.configHeaders();
    return this.http.post<string>('https://api.resend.com/emails', 
    {
      "from": "Acme <onboarding@resend.dev>",
      "to": ["marcoscorasaniti07@gmail.com"],
      "subject": "Hello World",
      "html": "<strong>It works!</strong>"
    },
    {headers});
  }
  
  
  private configHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${'re_Twobr9g5_7ugVb8PAgjVH6LcTZcopYdPX'}`
    });
  }


}
