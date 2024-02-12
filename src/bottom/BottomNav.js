import { View, Text ,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const bottomNavObj = createBottomTabNavigator();
const BottomNav = () => {
  return (
   <bottomNavObj.Navigator>
    <bottomNavObj.Screen name='Screen1' component={Screen1} options={{headerShown:false,tabBarIcon:()=>{
        return(
            <Image source={require('../pics/option.png')} style={{width:20,height:20}}></Image>
        )
    }}}></bottomNavObj.Screen>
    <bottomNavObj.Screen name='Screen2' component={Screen2} options={{headerShown:false,tabBarIcon:()=>{
        return(
            <Image source={require('../pics/option.png')} style={{width:20,height:20}}></Image>
        )
    }}}></bottomNavObj.Screen>
    <bottomNavObj.Screen name='Screen3' component={Screen3} options={{headerShown:false,tabBarIcon:()=>{
        return(
            <Image source={require('../pics/option.png')} style={{width:20,height:20}}></Image>
        )
    }}}></bottomNavObj.Screen>
   </bottomNavObj.Navigator>
  )
}

export default BottomNav