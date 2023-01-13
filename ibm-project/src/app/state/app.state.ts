import { Coffee } from '../../model/coffee.model'

export interface AppState {
  coffee: ReadonlyArray<Coffee>;
}