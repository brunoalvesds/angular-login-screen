import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authSevice: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signIn(credentials: any) {
    this.authSevice.login(credentials).subscribe(result => {
        if(result) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/contacts/' + result.id]);
        } else {
          this.invalidLogin = true;
          this.dialog.open(CustomDialogLogin, {
            width: '250px',
          });
        }
      } 
    );
  }

}

@Component({
  selector: 'login-custom-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./login-screen.component.scss']
})

export class CustomDialogLogin {
  constructor(public dialogRef: MatDialogRef<LoginScreenComponent>) {    
  }

  handleCancel() {
    this.dialogRef.close();
  }
}