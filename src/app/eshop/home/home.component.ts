import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [{name: 'test', price: {random: 69, czk: 6969}}]

  constructor() { }

  ngOnInit() {
  }

}
