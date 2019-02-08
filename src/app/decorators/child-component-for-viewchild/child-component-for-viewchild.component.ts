import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component-for-viewchild',
  templateUrl: './child-component-for-viewchild.component.html',
  styleUrls: ['./child-component-for-viewchild.component.scss']
})
export class ChildComponentForViewchildComponent implements OnInit {
  @Input() type = 'success';

  constructor() { }

  ngOnInit() {
  }

}
