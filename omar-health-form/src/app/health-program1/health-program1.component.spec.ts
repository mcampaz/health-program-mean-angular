import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProgram1Component } from './health-program1.component';

describe('HealthProgram1Component', () => {
  let component: HealthProgram1Component;
  let fixture: ComponentFixture<HealthProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProgram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
