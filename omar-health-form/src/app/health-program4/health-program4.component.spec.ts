import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProgram4Component } from './health-program4.component';

describe('HealthProgram4Component', () => {
  let component: HealthProgram4Component;
  let fixture: ComponentFixture<HealthProgram4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProgram4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProgram4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
