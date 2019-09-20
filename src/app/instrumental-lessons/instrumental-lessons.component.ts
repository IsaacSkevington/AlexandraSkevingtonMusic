import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { PAGES } from './pages';


@Component({
  selector: 'app-instrumental-lessons',
  templateUrl: './instrumental-lessons.component.html',
  styleUrls: ['./instrumental-lessons.component.css']
})
export class InstrumentalLessonsComponent implements OnInit {
  title = "Alex's Music Website";
  pages = PAGES;
  selectedpage: Page; 

  constructor() { }

  ngOnInit() {
  }

  selectedPage: Page;
  onSelect(page: Page): void {
    this.selectedPage = page;
}

}
