import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdestinosComponent } from './topdestinos.component';

describe('TopdestinosComponent', () => {
  let component: TopdestinosComponent;
  let fixture: ComponentFixture<TopdestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
