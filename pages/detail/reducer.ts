import {Action} from "../../store"
import {Reducer} from 'react'

export type LocalState = {
  value: string
}
export const initialState: LocalState = {
  value: 'second page initial state'
}
export const reducer: Reducer<LocalState, Action> = (state: LocalState, action: Action) => state