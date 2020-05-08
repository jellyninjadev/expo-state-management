import React, {useContext, useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import styles from './styles'
import {Context} from '../../store'
import {LocalAction} from './reducer'

export default () => {
  const {state: {RootReducer: state}, dispatch} = useContext(Context)

  console.log('state', state)

  const increment = () => {
    dispatch({type: LocalAction.Increase, payload: {value: state.value + 1}})
  }

  return <View style={styles.container}>
    <Text>{state.value}</Text>
    <Button title="Mutate state" onPress={increment} />
  </View>
}