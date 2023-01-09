import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Store } from '@ngrx/store';
import {actions as CallApiAction} from '../store/action';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.sass']
})
export class CoffeeDetailsComponent implements OnInit{
  public coffees;

  constructor(
    private coffeeService: CoffeeService,
    private store: Store<any>,
  ) {
    store.select('coffee')
      .subscribe((coffee) => {
        if (coffee && coffee.apiData) {
          console.log('[coffee-details] apiData', coffee.apiData)
        }
      });
  }
  ngOnInit() {
    this.store.dispatch(new CallApiAction.CallAPI({ apiData: [] }));
  }
}