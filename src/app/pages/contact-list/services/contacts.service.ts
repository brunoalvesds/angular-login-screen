import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  api_uri: string = "http://localhost:3000";

  getContacts(userId: any) {
    return this.http.get(`${this.api_uri}/users/${userId}`);
  }
}
