import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTemplateComponent } from './name-template.component';

describe('NameTemplateComponent', () => {
  let component: NameTemplateComponent;
  let fixture: ComponentFixture<NameTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
