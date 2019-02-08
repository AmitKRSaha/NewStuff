import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTapsComponent } from './parent-taps.component';

describe('ParentTapsComponent', () => {
  let component: ParentTapsComponent;
  let fixture: ComponentFixture<ParentTapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
