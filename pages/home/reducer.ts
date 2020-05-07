import {State, Action} from "../../store"
import {Reducer} from "react"

export type state = {
  value: string
}

export const initialState: state = {
  value: 'initial'
}

export const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    default: return {...state, ...action.payload}
  }
}