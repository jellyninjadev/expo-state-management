import {Dispatcher, Reducer} from '../../store'

export enum LocalAction {
  submit = 'submit'
}

export type LocalState = {
  firstName?: string
  lastName?: string
}
export const initialState: LocalState = {
}
export const reducer: Reducer<LocalState, LocalAction> = (state, action) => {
  return state
}