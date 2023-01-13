import { createActionGroup, props } from '@ngrx/store';
import { Coffee } from 'src/model/coffee.model';

export const CoffeeApiActions = createActionGroup({
  source: 'Coffee API',
  events: {
    'Retrieved Coffee List': props<{ data: ReadonlyArray<Coffee> }>(),
  },
});
