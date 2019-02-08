import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [AttributeComponent],
  imports: [
    CommonModule,
    DecoratorsRoutingModule
  ],
  bootstrap: [AttributeComponent]
})
export class DecoratorsModule { }
