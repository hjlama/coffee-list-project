import { HarnessLoader } from '@angular/cdk/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { CoffeeDetailsComponent } from './coffee-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('CoffeeDetailsComponent', () => {
  let component: CoffeeDetailsComponent;
  let fixture: ComponentFixture<CoffeeDetailsComponent>;
  let loader: HarnessLoader;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeDetailsComponent],
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        CommonModule,
        MatCardModule,
        MatPaginatorModule,
        StoreModule.forRoot(provideMockStore),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoffeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all paginator harnesses', async () => {
    const paginators = await loader.getAllHarnesses(MatPaginatorHarness);
    expect(paginators.length).toBe(1);
  });

  it('should be able to navigate between pages', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);

    expect(component.pageIndex).toBe(0);
    await paginator.goToNextPage();
    expect(component.pageIndex).toBe(1);
    await paginator.goToPreviousPage();
    expect(component.pageIndex).toBe(0);
  });

  it('should be able to go to the last page', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);

    expect(component.pageIndex).toBe(0);
    await paginator.goToLastPage();
    expect(component.pageIndex).toBe(49);
  });

  it('should be able to set the page size', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);

    expect(component.pageSize).toBe(10);
    await paginator.setPageSize(25);
    expect(component.pageSize).toBe(25);
  });
});
