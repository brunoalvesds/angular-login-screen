import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialog,  MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  contactList: any;
  loading: boolean = true;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private contactsService: ContactsService, 
    private route: ActivatedRoute, 
    private navigation: Router,
    public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getContacts(this.userId);
  }

  ngAfterContentChecked() {
    this.loading = false;
  }

  getContacts(userId: any) {
    this.contactsService.getContacts(userId).subscribe(
      (response: any) => {
        this.contactList = response;
      },
      error => {
        console.log("error list: ", error);
      }
    )
  }

  logout() {
    this.authService.logout();
    this.navigation.navigateByUrl('/login')
  }

  openDialog(): void {
    this.dialog.open(CustomDialog, {
      width: '250px',
      data: {
        route: this.route
      }
    });
  }

  async refreshData() {
    await this.getContacts(this.userId);
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
