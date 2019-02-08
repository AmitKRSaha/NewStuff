import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { AttributeComponent, TestDirective } from './attribute/attribute.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ChildComponentForViewchildComponent } from './child-component-for-viewchild/child-component-for-viewchild.component';

@NgModule({
  declarations: [AttributeComponent, TestDirective, ViewchildrenComponent, ChildComponentForViewchildComponent],
  imports: [
    CommonModule,
    DecoratorsRoutingModule
  ],
  bootstrap: [AttributeComponent]
})
export class DecoratorsModule { }
