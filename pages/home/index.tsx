import React, {useContext, useEffect} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import {Context} from '../../store'

export default () => {
  const {state, dispatch} = useContext(Context)

  useEffect(() => {
    dispatch({type: 'test', payload: {value: 'from dispatch'}})
  }, [])

  console.log('state', state)

  return <View style={styles.container}>
    <Text>{state.RootReducer.value}</Text>
  </View>
}