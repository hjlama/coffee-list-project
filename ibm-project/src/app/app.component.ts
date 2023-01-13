import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCoffee } from './state/coffee.selector';
import { CoffeeApiActions } from './state/coffee.action';
import { CoffeeService } from './coffee-list/coffee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  coffeeData$ = this.store.select(selectCoffee);


  constructor(private coffeeService: CoffeeService, private store: Store) { }

  ngOnInit() {
    this.coffeeService
      .getCoffeeAPIData()
      .subscribe((data) => {
        this.store.dispatch(CoffeeApiActions.retrievedCoffeeList({ data: data }))
        console.log('[app.comp] Data: ', data)
      }
      );
  }
}