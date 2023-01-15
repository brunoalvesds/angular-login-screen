import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log("recebeu: ", this.data);
  }

}
