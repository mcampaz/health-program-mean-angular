import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProgram2Component } from './health-program2.component';

describe('HealthProgram2Component', () => {
  let component: HealthProgram2Component;
  let fixture: ComponentFixture<HealthProgram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProgram2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProgram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
