import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/pages/contact-list/services/contacts.service';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {
  @Input() data: any;
  isEditing: boolean = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  removeContact(contactId: any) {
    this.contactsService.deleteContact(contactId).subscribe(
      response => {
        location.reload();
      }
    );
  }

  editContact() {
    this.isEditing = true;
  }

  saveContact(contactId: any, contactData: any) {
    if(contactData['name'] == "" || contactData['email'] == "" || contactData['phone'] == "" ) {
      alert("Invalid data, try again.")
    } else {
      this.isEditing = false;
      
      this.contactsService.updateContact(contactId, contactData).subscribe(
        response => {
          this.isEditing = false;
          location.reload();
        }
      );
    }
  }

}
