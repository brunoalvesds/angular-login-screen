import { Component, OnInit } from '@angular/core';
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
    private authSevice: AuthService) { }

  ngOnInit(): void {
  }

  signIn(credentials: any) {
    console.log("cred: ", credentials);
    this.authSevice.login(credentials).subscribe(result => {
        if(result) {
          console.log("res: ", result);
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/contacts/' + result.id]);
        } else {
          console.log("ret error");
          this.invalidLogin = true;
        }
      } 
    );
  }

}
