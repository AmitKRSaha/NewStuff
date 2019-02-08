import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild.component.html',
  styleUrls: ['./child-viewchild.component.scss']
})
export class ChildViewchildComponent implements OnInit {

  @Input() type = 'success';
  constructor() { }

  ngOnInit() {
  }

}
