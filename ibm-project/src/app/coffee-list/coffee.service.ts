import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from 'src/model/coffee.model';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {
    constructor(
        private httpClient: HttpClient
    ) { }

    // getCoffeeAPIData(): Observable<Coffee[]> {
    //     return this.httpClient
    //         .get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50')
    //         .pipe(
    //             map((data) => {
    //                 const coffeeData: Coffee[] = [];
    //                 for (let key in data) {
    //                     coffeeData.push({ ...data[key], id: key });
    //                 }
    //                 return coffeeData;
    //             })
    //         );
    // }
    getCoffeeAPIData(): Observable<Array<Coffee>> {
        return this.httpClient
            .get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50')
            .pipe(map((coffeeData) => { return coffeeData || [] }));
    }
}