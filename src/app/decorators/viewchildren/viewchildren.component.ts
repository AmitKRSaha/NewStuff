import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponentForViewchildComponent } from '../child-component-for-viewchild/child-component-for-viewchild.component';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent implements OnInit {

  // Returns the specified elements or directives from the view DOM as QueryList
  @ViewChildren(ChildComponentForViewchildComponent) alerts: QueryList<ChildComponentForViewchildComponent>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }

}
