import { Component,  ViewChild, AfterViewInit } from '@angular/core';
import { ChildViewchildComponent } from '../child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-parent-viewchild',
  templateUrl: './parent-viewchild.component.html',
  styleUrls: ['./parent-viewchild.component.scss']
})
export class ParentViewchildComponent implements AfterViewInit {


  // Like ViewChildren but returns only the first element or the directive matching the selector from the view DOM

  // This will return the native element
  @ViewChild('divElement') div: any;
  // This will return the component instance
  @ViewChild(ChildViewchildComponent) alert: ChildViewchildComponent;


  constructor() { }

  ngAfterViewInit() {
    console.log(this.div);
    console.log(this.alert);

  }


}
