import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Store } from '@ngrx/store';
import { actions as CallApiAction } from '../store/coffee.actions';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.sass']
})
export class CoffeeDetailsComponent implements OnInit {
  public coffees;
  public coffeeData;

  constructor(
    private coffeeService: CoffeeService,
    private store: Store<any>,
  ) {
    this.store.select('coffee')
      .subscribe((coffee) => {
        if (coffee) {
          console.log('[coffee-details] apiData', coffee)
        }
      });
  }
  ngOnInit() {
    console.log('[CoffeeDetailsComponent] on init')
    this.getData();
  }

  async getData() {
    this.coffeeData = await this.coffeeService.getCoffeeDetails();
    this.store.dispatch(new CallApiAction.CallAPI({ apiData: this.coffeeData }));
    console.log('[CoffeeDetailsComponent] store dispatch', this.coffeeData)
  }
}