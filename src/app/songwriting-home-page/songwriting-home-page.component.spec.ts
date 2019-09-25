import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongwritingHomePageComponent } from './songwriting-home-page.component';

describe('SongwritingHomePageComponent', () => {
  let component: SongwritingHomePageComponent;
  let fixture: ComponentFixture<SongwritingHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongwritingHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongwritingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
