import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonText: string = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl('/contacts');
  }

}
