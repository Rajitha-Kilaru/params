import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parameter2Component } from './parameter2.component';

describe('Parameter2Component', () => {
  let component: Parameter2Component;
  let fixture: ComponentFixture<Parameter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parameter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parameter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
