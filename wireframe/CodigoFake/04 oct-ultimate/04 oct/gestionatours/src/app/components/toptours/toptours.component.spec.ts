import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptoursComponent } from './toptours.component';

describe('ToptoursComponent', () => {
  let component: ToptoursComponent;
  let fixture: ComponentFixture<ToptoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
