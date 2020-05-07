import React, {createContext, useReducer, Dispatch, Reducer, ReactPropTypes} from 'react'
import {
  reducer as RootReducer,
  LocalState as RootReducerState,
  initialState as RootReducerInitialState
} from './pages/home/reducer'
import {
  reducer as SecondReducer,
  LocalState as SecondReducerState,
  initialState as SecondReducerInitialState
} from './pages/detail/reducer'

export type State = {
  RootReducer: RootReducerState,
  SecondReducer: SecondReducerState,
}
export type Dispatcher = {type: string, payload: Partial<State>}
export type Action = {type: string, payload: Partial<State>}

// @ts-ignore default value init from reducer
const Context = createContext<{state: State, dispatch: Dispatch<Dispatcher>}>({})

type Pages = keyof State

const combineReducers = (reducers: {[key in Pages]: Reducer<State[key], Action>}) =>
  (state: State, action: Action): State => Object
    .entries(reducers)
    .reduce((acc: State, [k, reducer]) =>
      ({[k as Pages]: reducer(state[k as Pages], action), ...acc}), {} as State)

const initialState: State = {
  RootReducer: RootReducerInitialState,
  SecondReducer: SecondReducerInitialState
}

const Provider = (props: ReactPropTypes) => {
  const [state, dispatch] = useReducer(
    combineReducers({RootReducer, SecondReducer}),
    initialState
  )
  return <Context.Provider value={{state, dispatch}} {...props} />
}


export {Context, Provider}