import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoAccompanimentComponent } from './piano-accompaniment.component';

describe('PianoAccompanimentComponent', () => {
  let component: PianoAccompanimentComponent;
  let fixture: ComponentFixture<PianoAccompanimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoAccompanimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
