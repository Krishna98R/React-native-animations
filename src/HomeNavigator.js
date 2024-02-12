import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';

const stackNavigatorObj = createStackNavigator();


const HomeNavigator = () => {
  return (
    <SafeAreaView style={styles.container}> 
    <NavigationContainer>
    <stackNavigatorObj.Navigator>
      <stackNavigatorObj.Screen name='Splash' component={Splash} options={{headerShown:false}}></stackNavigatorObj.Screen>
      <stackNavigatorObj.Screen name='Parent' component={Parent} options={{headerShown:false}}></stackNavigatorObj.Screen>
      </stackNavigatorObj.Navigator>  
    </NavigationContainer>
    </SafeAreaView> 

  )
}
const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      backgroundColor: "#3B5323", 
    }, 
    title: { 
      fontSize: 30, 
      fontWeight: "bold", 
      textAlign: "center", 
      color: "#fff", 
    }, 
}); 


export default HomeNavigator