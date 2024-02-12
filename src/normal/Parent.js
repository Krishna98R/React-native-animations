import { View, Text } from 'react-native'
import React from 'react'
import DrawerNav from '../drawer/DrawerNav'

const Parent = () => {
  return (
    <View style={{flex:1}}>
      <DrawerNav></DrawerNav>
    </View>
  )
}

export default Parent