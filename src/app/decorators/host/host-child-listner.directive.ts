import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostChildListner]'
})
export class HostChildListnerDirective {

  numClicks = 0;
  numClicksWindow = 0;
  @HostListener('click', ['$event'])
  onClick(event) {
    console.log(this.numClicks++);
  }

  // @HostListener('window:click', ['$event'])
  // onClick(event) {
  //   console.log('Num clicks on the window:', this.numClicksWindow++);
  // }

}
