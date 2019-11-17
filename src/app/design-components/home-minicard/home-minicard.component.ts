import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-minicard',
  templateUrl: './home-minicard.component.html',
  styleUrls: ['./home-minicard.component.scss']
})
export class HomeMinicardComponent implements OnInit {
  @Input() label: string;
  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
