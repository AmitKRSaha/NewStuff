import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TapComponent } from '../tap/tap.component';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements AfterContentInit {

  constructor() { }

  @ContentChildren(TapComponent) tabs: QueryList<TapComponent>;

 ngAfterContentInit() {
   this.tabs.forEach(tabInstance => console.log(tabInstance));
 }

}
