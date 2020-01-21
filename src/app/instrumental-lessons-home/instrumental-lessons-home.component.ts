import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS } from './testimonials';

@Component({
  selector: 'app-instrumental-lessons-home',
  templateUrl: './instrumental-lessons-home.component.html',
  styleUrls: ['./instrumental-lessons-home.component.css']
})
export class InstrumentalLessonsHomeComponent implements OnInit {
  Testimonials = TESTIMONIALS
  constructor() { }

  ngOnInit() {
  }

}
