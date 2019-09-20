import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar3Component } from './registrar3.component';

describe('Registrar3Component', () => {
  let component: Registrar3Component;
  let fixture: ComponentFixture<Registrar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
