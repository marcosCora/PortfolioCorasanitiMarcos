import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private http : HttpClient = inject(HttpClient);
  apiUrl = 'https://api.emailjs.com/api/v1.0/email/send'

  constructor() { }

  data = {
    service_id: 'service_1dmbec3',
    template_id: 'template_txcnghg',
    user_id: 'Iprp76_bIxSNJRsj3',
    template_params: { }
  };

  public postEmail(email : Email) : Observable<any>{
    this.data.template_params = email;

    return this.http.post<any>(this.apiUrl, this.data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }  





}
