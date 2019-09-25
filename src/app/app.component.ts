import { Component } from '@angular/core';
import { Page } from './page';
import { PAGES, STARTPAGE } from './pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Alexandra Skevington Music";
  pages = PAGES;
  selectedPage =  this.pages[0];
  

  constructor() { }

  ngOnInit() {
  }

  onSelect(page: Page): void{
    this.selectedPage = page;
    
  }
}


