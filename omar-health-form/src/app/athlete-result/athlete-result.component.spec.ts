import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteResultComponent } from './athlete-result.component';

describe('AthleteResultComponent', () => {
  let component: AthleteResultComponent;
  let fixture: ComponentFixture<AthleteResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
