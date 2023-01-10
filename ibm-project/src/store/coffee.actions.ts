import { Action } from '@ngrx/store';
import { Coffee } from 'src/model/coffee.model';

// action
export const CALL_API = '[CALL_API] CALL API';

export class CallAPI implements Action {
  readonly type = CALL_API;

  constructor(public payload: any) {
  }
}

export const actions = {
  CallAPI
};

// state
const initialState = {
  apiData: {}
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {

    case CallAPI:
      return { ...state, apiData: action.payload };

    default:
      return state;
  }
}