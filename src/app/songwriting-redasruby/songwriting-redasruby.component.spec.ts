import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongwritingRedasrubyComponent } from './songwriting-redasruby.component';

describe('SongwritingRedasrubyComponent', () => {
  let component: SongwritingRedasrubyComponent;
  let fixture: ComponentFixture<SongwritingRedasrubyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongwritingRedasrubyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongwritingRedasrubyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
