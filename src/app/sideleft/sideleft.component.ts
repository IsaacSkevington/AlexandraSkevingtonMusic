import { Component, OnInit } from '@angular/core';
import {CALENDARITEMS} from './CalendarItems'

@Component({
  selector: 'app-sideleft',
  templateUrl: './sideleft.component.html',
  styleUrls: ['./sideleft.component.css']
})
export class SideleftComponent implements OnInit {
  CalendarItems = CALENDARITEMS;

  constructor() { }

  ngOnInit() {
  }

}
