import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  constructor() { }
  @ContentChild('divElement') div: any;

  ngOnInit() {
  }

 ngAfterContentInit() {
   console.log(this.div);
 }

}
