import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {
    constructor(private httpClient: HttpClient) { }

    async getCoffeeDetails() {
        return await this.httpClient.get('https://random-data-api.com/api/coffee/random_coffee?size=50');
    }
}