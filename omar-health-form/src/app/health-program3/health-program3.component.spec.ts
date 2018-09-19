import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProgram3Component } from './health-program3.component';

describe('HealthProgram3Component', () => {
  let component: HealthProgram3Component;
  let fixture: ComponentFixture<HealthProgram3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProgram3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProgram3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
