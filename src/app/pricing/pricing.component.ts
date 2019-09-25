import { Component, OnInit } from '@angular/core';
import { PRICES } from './prices';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent{

  prices = PRICES;

  constructor() {
   }

  ngOnInit() {
  }

}
