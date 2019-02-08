import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
