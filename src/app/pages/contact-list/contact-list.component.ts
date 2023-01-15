import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  contactList: any;

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    this.getContacts(userId);
  }

  getContacts(userId: any) {
    this.contactsService.getContacts(userId).subscribe(
      (response: any) => {
        this.contactList = response.contacts;
        console.log("List:", this.contactList);
      },
      error => {
        console.log("error list: ", error);
      }
    )
  }

}
