import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarproductoComponent } from './pagarproducto.component';

describe('PagarproductoComponent', () => {
  let component: PagarproductoComponent;
  let fixture: ComponentFixture<PagarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
