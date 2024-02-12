import { View, Text } from 'react-native'
import React from 'react'

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
      <Text onPress={() =>{
        navigation.openDrawer()
      }}>Screen3</Text>
    </View>
  )
}

export default Screen3