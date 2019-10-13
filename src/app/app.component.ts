import { Component } from '@angular/core';
import { Page } from './page';
import { PAGES, STARTPAGE } from './pages';
import { BottomMenuItem } from './bottommenuitem';
import { BOTTOMMENUITEMS } from './bottommenuitems';
import { TopRightMenuItem } from './toprightmenuitem';
import { TOPRIGHTMENUITEMS } from './toprightmenuitems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Alexandra Skevington Music";
  pages = PAGES;
  selectedPage =  this.pages[0];
  BottomMenuItems = BOTTOMMENUITEMS
  TopRightMenuItems = TOPRIGHTMENUITEMS

  constructor() { }

  ngOnInit() {
  }

  onSelect(page: Page): void{
    this.selectedPage = page;
    
  }
}


