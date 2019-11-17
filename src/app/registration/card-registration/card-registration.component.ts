import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-registration',
  templateUrl: './card-registration.component.html',
  styleUrls: ['./card-registration.component.scss']
})
export class CardRegistrationComponent implements OnInit {

  @Input() label: string;
  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
