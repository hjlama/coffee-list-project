import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeDetailsComponent } from '../coffee-details/coffee-details.component';
import { CoffeeService } from 'src/coffee-details/coffee.service';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer as callApiReducer } from '../store/action';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      callApi: callApiReducer,
    }),
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
