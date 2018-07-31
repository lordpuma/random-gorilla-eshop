import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product = {name: 'test', price: {random: 69, czk: 6969}}

  constructor() { }

  ngOnInit() {
  }

}
