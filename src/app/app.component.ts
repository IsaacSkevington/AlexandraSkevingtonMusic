import { Component } from '@angular/core';
import { Page } from './page';
import { PAGES } from './pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
