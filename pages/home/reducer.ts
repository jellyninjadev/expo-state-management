import {State, Action} from "../../store"
import {Reducer} from "react"

export type LocalState = {
  value: string
}

export const initialState: LocalState = {
  value: 'initial'
}

export const reducer: Reducer<LocalState, Action> = (state: LocalState, action: Action) => {
  switch (action.type) {
    default: return {...state, ...action.payload}
  }
}