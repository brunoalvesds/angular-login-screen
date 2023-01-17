import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  api_uri: string = environment.API_KEY;

  getContacts(userId: any) {
    return this.http.get(`${this.api_uri}/contacts?userId=${userId}`);
  }

  addContact(contactData: object) {
    return this.http.post(`${this.api_uri}/contacts`, contactData);
  }

  deleteContact(contactId: any) {
    return this.http.delete(`${this.api_uri}/contacts/${contactId}`);
  }

  updateContact(contactId: any, contactData: object) {
    return this.http.patch(`${this.api_uri}/contacts/${contactId}`, contactData);
  }
}
