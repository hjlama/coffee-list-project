import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Coffee } from 'src/model/coffee.model';

export const selectCoffee = createFeatureSelector<ReadonlyArray<Coffee>>('coffee');
