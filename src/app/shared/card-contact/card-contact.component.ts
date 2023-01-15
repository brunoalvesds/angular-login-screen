import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/pages/contact-list/services/contacts.service';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {
  @Input() data: any;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  removeContact(contactId: any) {
    this.contactsService.deleteContact(contactId).subscribe(
      response => {
        console.log("Contact removed.");
        location.reload();
      }
    );
  }

}
