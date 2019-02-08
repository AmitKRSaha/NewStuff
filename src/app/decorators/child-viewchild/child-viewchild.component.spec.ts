import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewchildComponent } from './child-viewchild.component';

describe('ChildViewchildComponent', () => {
  let component: ChildViewchildComponent;
  let fixture: ComponentFixture<ChildViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
