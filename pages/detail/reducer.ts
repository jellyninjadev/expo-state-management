
import {State, Action} from "../../store"
import {Reducer} from 'react'
export type state = {
  value: string
}
export const initialState: state = {
  value: 'second page initial state'
}
export const reducer: Reducer<State, Action> = (state: State, action: Action) => state