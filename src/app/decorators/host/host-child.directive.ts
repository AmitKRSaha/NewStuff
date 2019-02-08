import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostChild]'
})
export class HostChildDirective {

  constructor() { }

  @HostBinding('class.tooltip') tooltip = true;

  @HostBinding('class.tooltip')
  get tooltipAsGetter() {
    // your logic
    return false;
  }

  @HostBinding() type = 'text';

}
