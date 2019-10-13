import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { PAGES } from './pages';
import { PRICES } from './prices';


@Component({
  selector: 'app-piano-accompaniment',
  templateUrl: './piano-accompaniment.component.html',
  styleUrls: ['./piano-accompaniment.component.css']
})
export class PianoAccompanimentComponent implements OnInit {
  title = "Alex's Music Website";
  pages = PAGES;
  selectedpage: Page;
  selectedPage =  this.pages[0] 
  prices = PRICES;

  constructor() { }

  ngOnInit() {
  }


  onSelect(page: Page): void {
    this.selectedPage = page;
}

}
