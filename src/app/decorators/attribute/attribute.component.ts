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

// Returns the value of the specified attribute from the host
@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  constructor(@Attribute('type') type ) {
    console.log(type); // text
  }
}
