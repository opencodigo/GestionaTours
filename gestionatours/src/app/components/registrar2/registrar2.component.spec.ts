import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar2Component } from './registrar2.component';

describe('Registrar2Component', () => {
  let component: Registrar2Component;
  let fixture: ComponentFixture<Registrar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
