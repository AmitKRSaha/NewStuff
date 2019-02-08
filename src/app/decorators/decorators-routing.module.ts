import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttributeComponent} from './attribute/attribute.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';

const routes: Routes = [
  {path: '', component: AttributeComponent },
  { path : 'vchild', component: ViewchildrenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorsRoutingModule { }
