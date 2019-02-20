import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';

@NgModule({
  declarations: [PizzasComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzasComponent]
})
export class PizzasModule { }
