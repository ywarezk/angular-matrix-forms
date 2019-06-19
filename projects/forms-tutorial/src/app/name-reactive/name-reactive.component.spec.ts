import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameReactiveComponent } from './name-reactive.component';

describe('NameReactiveComponent', () => {
  let component: NameReactiveComponent;
  let fixture: ComponentFixture<NameReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
