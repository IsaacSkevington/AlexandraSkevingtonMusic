
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalLessonsComponent } from './instrumental-lessons.component';

describe('InstrumentalLessonsComponent', () => {
  let component: InstrumentalLessonsComponent;
  let fixture: ComponentFixture<InstrumentalLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
