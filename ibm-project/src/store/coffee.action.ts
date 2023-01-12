import { Action } from '@ngrx/store';
import { Coffee } from 'src/model/coffee.model';

// action
export const ADD_DATA = '[ADD_DATA] Add Data';

export class AddData implements Action {
  readonly type = ADD_DATA;

  constructor(public payload: any) {
  }
}

export const actions = {
  AddData
};

// state
const initialState = {
  apiData: {}
};

// reducer
export function coffeeReducer(state = initialState, action) {
  console.log('[action.ts]', action)
  switch (action.type) {
    case ADD_DATA:
      return { ...state, apiData: action.payload.apiData };

    default:
      return state;
  }
}
