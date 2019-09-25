import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { PAGES } from './pages';


@Component({
  selector: 'app-songwriting',
  templateUrl: './songwriting.component.html',
  styleUrls: ['./songwriting.component.css']
})
export class SongwritingComponent implements OnInit {
  title = "Alex's Music Website";
  pages = PAGES;
  selectedpage: Page; 
  selectedPage =  this.pages[0]

  constructor() { }

  ngOnInit() {
  }

  onSelect(page: Page): void {
    this.selectedPage = page;
}

}
