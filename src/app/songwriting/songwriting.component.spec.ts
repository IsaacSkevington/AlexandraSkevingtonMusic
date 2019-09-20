import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongwritingComponent } from './songwriting.component';

describe('SongwritingComponent', () => {
  let component: SongwritingComponent;
  let fixture: ComponentFixture<SongwritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongwritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
