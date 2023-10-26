import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "https://formspree.io/f/myyabagg"

  constructor(private http:HttpClient){}


    SendEmail(input: any) {

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	return this.http.post(this.url, input, { 'headers': headers});
    }

}
