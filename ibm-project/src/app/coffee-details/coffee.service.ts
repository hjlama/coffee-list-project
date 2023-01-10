import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {
    private apiData = {};

    constructor(
        private httpClient: HttpClient
    ) { }

    async getCoffeeDetails() {
        console.log('[coffee-service] getCoffeeDetails()');
        this.apiData = await this.httpClient.get('https://random-data-api.com/api/coffee/random_coffee?size=50').toPromise();
        return this.apiData;
    }
}