import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { AttributeComponent, TestDirective } from './attribute/attribute.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ChildComponentForViewchildComponent } from './child-component-for-viewchild/child-component-for-viewchild.component';
import { ParentViewchildComponent } from './parent-viewchild/parent-viewchild.component';
import { ChildViewchildComponent } from './child-viewchild/child-viewchild.component';
import { TapComponent } from './contentchildren/tap/tap.component';
import { TapsComponent } from './contentchildren/taps/taps.component';
import { ParentTapsComponent } from './contentchildren/parent-taps/parent-taps.component';
import { TabsComponent } from './contentchild/tabs/tabs.component';
import { ParentTabsComponent } from './contentchild/parent-tabs/parent-tabs.component';
import { HostParentComponent } from './host/host-parent/host-parent.component';
import { HostChildDirective } from './host/host-child.directive';
import { HostChildListnerDirective } from './host/host-child-listner.directive';

@NgModule({
  declarations: [AttributeComponent, TestDirective, ViewchildrenComponent, ChildComponentForViewchildComponent, ParentViewchildComponent, ChildViewchildComponent, TapComponent, TapsComponent, ParentTapsComponent, TabsComponent, ParentTabsComponent, HostParentComponent, HostChildDirective, HostChildListnerDirective],
  imports: [
    CommonModule,
    DecoratorsRoutingModule
  ],
  bootstrap: [AttributeComponent]
})
export class DecoratorsModule { }
