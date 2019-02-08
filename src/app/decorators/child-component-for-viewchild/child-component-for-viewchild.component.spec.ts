import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentForViewchildComponent } from './child-component-for-viewchild.component';

describe('ChildComponentForViewchildComponent', () => {
  let component: ChildComponentForViewchildComponent;
  let fixture: ComponentFixture<ChildComponentForViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentForViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentForViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
