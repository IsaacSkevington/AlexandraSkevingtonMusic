import { Component, OnInit } from '@angular/core';
import { Testimonial } from './testimonial';
import { TESTIMONIALS } from './testimonials';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  Testimonials = TESTIMONIALS

  constructor() { }

  ngOnInit() {
  }

}
