import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../drawer/Main';

const drawerNavObj = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <drawerNavObj.Navigator>
    <drawerNavObj.Screen name='Main' component={Main} options={{headerShown:true}}>     
        </drawerNavObj.Screen>        
    </drawerNavObj.Navigator>
  )
}

export default DrawerNav