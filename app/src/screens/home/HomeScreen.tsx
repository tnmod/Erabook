import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Popins } from '../../components/popins'

const HomeScreen: React.FC = () => {


  React.useEffect(()=>{

  },[])

  return (
    <View style={[styles.container]}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white'
  },
  text: {
    color: '#192e51',
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text400: {
    color: '#192e51',
    fontFamily: Popins[400],
    top: 1.8,
  },
  text500: {
    color: '#192e51',
    fontFamily: Popins[500],
    top: 2,
  },
  text700: {
    color: '#192e51',
    fontFamily: Popins[700],
    top: 2.1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})