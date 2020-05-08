import {Action} from "../../state"
import {Dispatcher, Reducer} from "../../store"

export enum LocalAction {
  Increase = 'increase',
  Decrease = 'decrease'
}

export type LocalState = {
  value: number
}

export const initialState: LocalState = {
  value: 0
}

export const reducer: Reducer<LocalState, LocalAction> = (state, action) => {
  switch (action.type) {
    default: return {...state, ...action.payload}
  }
}