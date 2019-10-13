import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { PAGES } from './pages';


@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
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
