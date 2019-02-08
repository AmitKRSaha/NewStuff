import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttributeComponent} from './attribute/attribute.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ParentViewchildComponent } from './parent-viewchild/parent-viewchild.component';
import { ParentTapsComponent } from './contentchildren/parent-taps/parent-taps.component';
import { ParentTabsComponent } from './contentchild/parent-tabs/parent-tabs.component';
import { HostParentComponent } from './host/host-parent/host-parent.component';

const routes: Routes = [
  {path: '', component: AttributeComponent },
  { path : 'vchildren', component: ViewchildrenComponent },
  { path : 'vchild', component: ParentViewchildComponent },

  { path : 'contentchild', component: ParentTabsComponent },
  { path : 'contentchildren', component: ParentTapsComponent },

  {path : 'hostbinding', component: HostParentComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorsRoutingModule { }
