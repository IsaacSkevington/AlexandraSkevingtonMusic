import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongwritingAskevingtonComponent } from './songwriting-askevington.component';

describe('SongwritingAskevingtonComponent', () => {
  let component: SongwritingAskevingtonComponent;
  let fixture: ComponentFixture<SongwritingAskevingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongwritingAskevingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongwritingAskevingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
