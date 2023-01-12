import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Store } from '@ngrx/store';
import { actions as AddDataAction } from '../../store/coffee.action';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeDetailsComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public dataSource: any[];
  public dataSize: any;
  public data: any;
  public pageIndex: number = 0;
  public pageSize: number = 10;

  constructor(
    private coffeeService: CoffeeService,
    private store: Store<any>,
    private cdr: ChangeDetectorRef
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
  ngAfterViewInit() {
    console.log('[CoffeeDetailsComponent] on init')
    // this.getData();
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
      const startKey = this.paginator.pageIndex * 10;
      const endKey = startKey + 10;
      if (Array.isArray(res)) {
        console.log('res.slice', this.data);
        this.dataSource = res.slice(startKey, endKey);
        this.cdr.detectChanges();
      } else {
        throw "Expected items to be an array"
      }
    });
  }
}
