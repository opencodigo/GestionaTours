import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourciudadesComponent } from './tourciudades.component';

describe('TourciudadesComponent', () => {
  let component: TourciudadesComponent;
  let fixture: ComponentFixture<TourciudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourciudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourciudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
