import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalLessonsHomeComponent } from './instrumental-lessons-home.component';

describe('InstrumentalLessonsHomeComponent', () => {
  let component: InstrumentalLessonsHomeComponent;
  let fixture: ComponentFixture<InstrumentalLessonsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalLessonsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalLessonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
