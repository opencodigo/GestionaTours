import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaverticalComponent } from './busquedavertical.component';

describe('BusquedaverticalComponent', () => {
  let component: BusquedaverticalComponent;
  let fixture: ComponentFixture<BusquedaverticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaverticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
