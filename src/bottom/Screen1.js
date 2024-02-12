import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const Screen1 = ({navigation}) => {
  return (
    <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
      <Text onPress={() =>{
        navigation.openDrawer()
      }}>Screen1</Text>
      <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'bounceInUp'} duration={2000} easing="ease-out"/>
      <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'bounceInUp'} duration={2000} easing="ease-out-back"/>
       {/* <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'zoomIn'} easing="ease-in-out-quint"/>
       <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'zoomIn'} easing="ease-in-out-sine"/>
       <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'zoomIn'} easing="ease-in-cubic"/>
       <Animatable.Image source={require('../../assets/youtube.png')} style={{width:150,height:150}}
      animation={'zoomIn'} easing="ease-in-back"/> */}
    </View>
  )
}

export default Screen1