import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

  constructor(
    private contactsService: ContactsService, 
    private route: ActivatedRoute, 
    private navigation: Router,
    public dialog: MatDialog,
    private authService: AuthService) { }

  contactList: any;

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    this.getContacts(userId);
  }

  getContacts(userId: any) {
    this.contactsService.getContacts(userId).subscribe(
      (response: any) => {
        this.contactList = response;
        console.log("List:", this.contactList);
      },
      error => {
        console.log("error list: ", error);
      }
    )
  }

  logout() {
    this.authService.logout();
    this.navigation.navigateByUrl('/')
  }

  openDialog(): void {
    this.dialog.open(CustomDialog, {
      width: '250px',
      data: {
        route: this.route
      }
    });
  }
}

@Component({
  selector: 'contact-custom-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./contact-list.component.scss']
})

export class CustomDialog {
  userId: any;

  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>, 
    private contactsService: ContactsService, 
    @Inject(MAT_DIALOG_DATA) data: {route: ActivatedRoute}) {
      data.route.params.subscribe(
        params => {
          this.userId = params.id
        }
      );
    }

  addContact(data: any) {
    if(data['name'] == "" || data['email'] == "" || data['phone'] == "" ) {
      alert("Invalid data, try again.")
    } else {
      const body = {
        "name": data['name'],
        "email": data['email'],
        "phone": data['phone'],
        "userId": this.userId,
      }
  
      this.contactsService.addContact(body).subscribe(
        res => {
          console.log("added: ", res);
          location.reload();
          this.dialogRef.close();
  
        },
        error => {
          this.dialogRef.close();
          alert("Error: Cannot add a new contact.")
        }
      );
    }
  }

  handleCancel() {
    this.dialogRef.close();
  }
}
