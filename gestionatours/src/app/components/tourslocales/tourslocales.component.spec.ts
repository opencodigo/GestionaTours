import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourslocalesComponent } from './tourslocales.component';

describe('TourslocalesComponent', () => {
  let component: TourslocalesComponent;
  let fixture: ComponentFixture<TourslocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourslocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourslocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
