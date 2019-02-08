import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ChildComponentForViewchildComponent } from '../child-component-for-viewchild/child-component-for-viewchild.component';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent implements OnInit, AfterViewInit {

  // Returns the specified elements or directives from the view DOM as QueryList
  @ViewChildren(ChildComponentForViewchildComponent) alerts: QueryList<ChildComponentForViewchildComponent>;


  // The read parameter —
  // By default, the ViewChildren decorator will return the component instance, but you can ask for other tokens:

  // 1. The native DOM element —
   @ViewChildren(ChildComponentForViewchildComponent, {read : ElementRef}) alert: QueryList<ChildComponentForViewchildComponent>;


    // 2. ViewContainerRef — You need this token when you need to create templates or components dynamically
    @ViewChildren(ChildComponentForViewchildComponent, {read : ViewContainerRef}) alertes: QueryList<ChildComponentForViewchildComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));

    this.alert.forEach(alertInstance => console.log(alertInstance));

    this.alertes.forEach(alertInstance => console.log(alertInstance));

  }

}
