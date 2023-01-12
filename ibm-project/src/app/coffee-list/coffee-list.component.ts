import { Component, OnInit, ViewChild } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Store } from '@ngrx/store';
import { actions as AddDataAction } from '../../store/coffee.action';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.sass']
})
export class CoffeeDetailsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any[];
  dataSize: any;
  data: any;
  constructor(
    private coffeeService: CoffeeService,
    private store: Store<any>,
  ) {
    store.select('coffee')
      .subscribe((coffeeData) => {
        if (coffeeData && coffeeData.apiData) {
          console.log('coffeeData size', coffeeData.apiData.length)
          this.dataSize = coffeeData.apiData.length;
          this.setPageContent()
          console.log('[coffee-details] apiData', coffeeData)
        }
      });
  }
  ngOnInit() {
    console.log('[CoffeeDetailsComponent] on init')
    this.getData();
  }

  async getData() {
    this.data = await this.coffeeService.getCoffeeDetails();
    this.store.dispatch(new AddDataAction.AddData({ apiData: this.data }));
    console.log('[CoffeeDetailsComponent] store dispatch', this.data)
  }


  setPageContent() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.data);
      })
    ).subscribe(res => {
      const from = this.paginator.pageIndex * 10;
      const to = from + 10;
      if (Array.isArray(res)) {
        console.log('res.slice', this.data);
        this.dataSource = res.slice(from, to);
      } else {
        throw "Expected items to be an array"
      }
    });
  }
}
