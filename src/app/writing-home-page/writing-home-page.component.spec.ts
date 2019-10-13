import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingHomePageComponent } from './writing-home-page.component';

describe('WritingHomePageComponent', () => {
  let component: WritingHomePageComponent;
  let fixture: ComponentFixture<WritingHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
