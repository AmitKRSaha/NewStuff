import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewchildComponent } from './parent-viewchild.component';

describe('ParentViewchildComponent', () => {
  let component: ParentViewchildComponent;
  let fixture: ComponentFixture<ParentViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
