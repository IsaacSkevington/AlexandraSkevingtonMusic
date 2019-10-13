import { Component, OnInit } from '@angular/core';
import {NEWSITEMS} from './NewsItems'

@Component({
  selector: 'app-sideright',
  templateUrl: './sideright.component.html',
  styleUrls: ['./sideright.component.css']
})
export class SiderightComponent implements OnInit {
  NewsItems = NEWSITEMS;

  constructor() { }

  ngOnInit() {
  }

}
