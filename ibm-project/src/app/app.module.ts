//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeService } from 'src/app/coffee-details/coffee.service';
import { PaginatorComponent } from './paginator/paginator.component';

//Import component
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

//Store
import { StoreModule } from '@ngrx/store';
import { reducer as callApiReducer } from '../store/CallAPI';



@NgModule({
  declarations: [
    AppComponent,
    CoffeeDetailsComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    StoreModule.forRoot({
      callApi: callApiReducer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
