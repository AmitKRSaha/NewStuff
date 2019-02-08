import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttributeComponent} from './attribute/attribute.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ParentViewchildComponent } from './parent-viewchild/parent-viewchild.component';

const routes: Routes = [
  {path: '', component: AttributeComponent },
  { path : 'vchildren', component: ViewchildrenComponent },
  { path : 'vchild', component: ParentViewchildComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorsRoutingModule { }
