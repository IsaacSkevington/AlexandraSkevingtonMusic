import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoAccompanimentHomeComponent } from './piano-accompaniment-home.component';

describe('PianoAccompanimentHomeComponent', () => {
  let component: PianoAccompanimentHomeComponent;
  let fixture: ComponentFixture<PianoAccompanimentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoAccompanimentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoAccompanimentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
