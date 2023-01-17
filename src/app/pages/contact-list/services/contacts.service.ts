import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  api_uri: string = environment.API_KEY;
  binAccess: string = "$2b$10$/DKJGhOGVH4qnOxUxoTnkuee703sl6VdDbExMBzHFuaQhpn5a5GBO";

  getContacts(userId: any) {
    const headers = new HttpHeaders().set('X-Access-Key', this.binAccess);
    return this.http.get(`${this.api_uri}/contacts?userId=${userId}`, {headers});
  }

  addContact(contactData: object) {
    const headers = new HttpHeaders().set('X-Access-Key', this.binAccess);
    return this.http.post(`${this.api_uri}/contacts`, contactData, {headers});
  }

  deleteContact(contactId: any) {
    const headers = new HttpHeaders().set('X-Access-Key', this.binAccess);
    return this.http.delete(`${this.api_uri}/contacts/${contactId}`, {headers});
  }

  updateContact(contactId: any, contactData: object) {
    const headers = new HttpHeaders().set('X-Access-Key', this.binAccess);
    return this.http.patch(`${this.api_uri}/contacts/${contactId}`, contactData, {headers});
  }
}
