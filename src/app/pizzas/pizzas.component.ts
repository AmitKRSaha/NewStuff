import { Component, OnInit } from '@angular/core';
import { PizzasQuery } from './state/pizzas.query';
import { Observable } from 'rxjs';
import { Pizza } from './state';
import { PizzasService } from './state/pizzas.service';
import { ID } from '@datorama/akita';
import { Topping, toppingsList } from './state/pizza.model';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;
  activePizzaToppings$: Observable<Topping[]>;
  toppings: Topping[];

  get activePizzaId(): ID {
    return this.pizzasQuery.getActiveId();
  }

  constructor(
    private pizzasQuery: PizzasQuery,
    private pizzasService: PizzasService
  ) {}

  ngOnInit() {
    this.pizzas$ = this.pizzasQuery.selectAll();
    this.activePizzaToppings$ = this.pizzasQuery.selectPizzaToppings();
    this.toppings = toppingsList;
  }

  newPizza() {
    this.pizzasService.add();
  }

  toggleTopping(topping: Topping) {
    this.pizzasService.toggleTopping(topping, this.pizzasQuery.getActiveId());
  }

  setActivePizza(id: ID) {
    this.pizzasService.setActivePizza(id);
  }
}
