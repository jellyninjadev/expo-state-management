import React, {createContext, useReducer, Dispatch, Reducer} from 'react'
import {
  reducer as RootReducer,
  state as RootReducerState,
  initialState as RootReducerInitialState
} from './pages/home/reducer'
import {
  reducer as SecondReducer,
  state as SecondReducerState,
  initialState as SecondReducerInitialState
} from './pages/detail/reducer'

export type State = {
  RootReducer: RootReducerState,
  SecondReducer: SecondReducerState,
  [key: string]: any
}
export type Dispatcher = {type: string, payload: Partial<State>}
export type Action = {type: string, payload: Partial<State>}

const Context = createContext<{state: State, dispatch: Dispatch<Dispatcher>}>({})

const combineReducers = (reducers: {[key: string]: Reducer<State, Action>}) =>
  (state: State, action: Action): State => Object
    .entries(reducers)
    .reduce((acc: any, [key, reducer]: [string, Reducer<State, Action>]) =>
      ({[key]: reducer(state[key], action), ...acc}), {})

const initialState: State = {
  RootReducer: RootReducerInitialState,
  SecondReducer: SecondReducerInitialState
}

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(
    combineReducers({RootReducer, SecondReducer}),
    initialState
  )
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}


export {Context, Provider}