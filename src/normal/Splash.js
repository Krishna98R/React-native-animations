import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() =>{
            navigation.navigate('Parent')
            
        },2000)
    },[])
  return (
    <View>
      <Text>splash</Text>
    </View>
  )
}

export default Splash