import { Component, OnInit, Directive, Attribute } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  constructor(@Attribute('type') type ) {
    console.log(type); // text
  }
}
