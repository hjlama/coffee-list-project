import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Store } from '@ngrx/store';
import { CoffeeApiActions } from 'src/app/state/coffee.action';
import { merge, Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Coffee } from 'src/model/coffee.model';
import { selectCoffee } from '../state/coffee.selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeDetailsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @Input() data: ReadonlyArray<Coffee> = [];
  public dataSource: any[];
  public dataSize: any;
  public pageIndex: number = 0;
  public pageSize: number = 10;
  
  constructor(
    private store: Store<any>,
    private cdr: ChangeDetectorRef
  ) {
    this.store.select(selectCoffee).subscribe((coffeeData) => {
      if (coffeeData && coffeeData.length > 0) {
        this.setPageContent(coffeeData);
      }
    })

  }

  ngOnInit(): void { }

  // ngAfterViewInit() {
  //   if (this.coffeeData.length > 0) {
  //     this.setPageContent();
  //   }
  // }

  // async getData() {
  //   // this.data = await this.coffeeService.getCoffeeDetails();
  //   this.store.dispatch(new loadDataSuccess({ apiData: this.data }));
  //   console.log('[CoffeeDetailsComponent] store dispatch', this.data)
  // }


  setPageContent(data) {
    this.dataSize = data.length;
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(data);
      })
    ).subscribe(res => {
      const startKey = this.paginator.pageIndex * 10;
      const endKey = startKey + 10;
      if (Array.isArray(res)) {
        this.dataSource = res.slice(startKey, endKey);
        this.cdr.detectChanges();
      } else {
        throw "Expected items to be an array"
      }
    });
  }
}
