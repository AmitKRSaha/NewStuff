import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-taps',
  templateUrl: './parent-taps.component.html',
  styleUrls: ['./parent-taps.component.scss']
})
export class ParentTapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



//   Things to Remember —
// The QueryList is initialized only before the ngAfterContentInit lifecycle hook, therefore, is available only from this point.
// ContentChildren includes only elements that exists within the ng-content tag.
// Returns QueryList like ViewChildren .
}
