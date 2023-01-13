import { createReducer, on } from '@ngrx/store';

import { CoffeeApiActions } from './coffee.action';
import { Coffee } from 'src/model/coffee.model';

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
    initialState,
    on(CoffeeApiActions.retrievedCoffeeList, (_state, { data }) => data)
);