import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parameter1Component } from './parameter1.component';

describe('Parameter1Component', () => {
  let component: Parameter1Component;
  let fixture: ComponentFixture<Parameter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parameter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parameter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
