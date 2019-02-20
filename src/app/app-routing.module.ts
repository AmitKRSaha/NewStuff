import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'attribute', loadChildren: './decorators/decorators.module#DecoratorsModule'},
  {path: 'grid', loadChildren: './grid/grid.module#GridModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
