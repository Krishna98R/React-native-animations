import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import * as Animatable from 'react-native-animatable'
import { FadeIn, FadeOut , BounceIn } from 'react-native-reanimated';

const bezierQuad = () => {
  return Math.min(1.0, Math.sin(28 * t - 6.16) / (5 * t - 1.1))
}

const Animatedbtn = Animatable.createAnimatableComponent(TouchableOpacity)
const Screen2 = ({ navigation }) => {

  const width = useSharedValue(0);
  const yvalue = useSharedValue(60)
  const iconScale = useSharedValue(0);
  const iconScale1 = useSharedValue(0);

  const menuStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      transform: [{ translateY: yvalue.value }]
    }
  })

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }]
    }
  })

  const iconStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale1.value }]
    }
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => {
        navigation.openDrawer()
      }}>Screen2</Text>

      <View style={{ width: "100%", height: "50%" }}>

        <Animated.View style={[{
          width: 300, height: 70, borderRadius: 35, backgroundColor: "black",
          alignSelf: 'center', flexDirection: 'row', justifyContent:
            'space-evenly', alignItems: 'center'
        }, menuStyle]}>
          <Animated.Image source={require("../../assets/youtube.png")} style={[{ width: 30, height: 30, tintColor: 'white' }, iconStyle]} />
          <Animated.Image source={require("../../assets/youtube.png")} style={[{ width: 30, height: 30, tintColor: 'white' }, iconStyle1]} />
          <Animated.Image source={require("../../assets/youtube.png")} style={[{ width: 30, height: 30, tintColor: 'white' }, iconStyle]} />
          <Animated.Image source={require("../../assets/youtube.png")} style={[{ width: 30, height: 30, tintColor: 'white' }]} entering={BounceIn.duration(1500)} />
        </Animated.View>



        <TouchableOpacity style={{
          width: 70, height: 70, backgroundColor: "black", alignSelf: "center",
          borderRadius: 35, justifyContent: "center", alignItems: "center"
        }}
          onPress={() => {
            if (width.value == 0) {
              width.value = withTiming(300, { duration: 300 })
              yvalue.value = withTiming(-50, { duration: 300 })
              iconScale.value = withSpring(1,
                {
                  duration: 1000,
                  dampingRatio: 0.5,
                  stiffness: 100,
                  overshootClamping: false,
                  restDisplacementThreshold: 0.01,
                  restSpeedThreshold: 2,
                  // reduceMotion: ReduceMotion.System,
                }),
                iconScale1.value = withSpring(1,
                  {
                    duration: 10000,
                    dampingRatio: 0.5,
                    stiffness: 100,
                    overshootClamping: false,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 2,
                    // reduceMotion: ReduceMotion.System,
                  })
            } else {
              iconScale.value = withTiming(0,
                {
                  duration: 100,

                }),
                iconScale1.value = withTiming(0,
                  {
                    duration: 100,

                  })
              width.value = withTiming(0, { duration: 300 })
              yvalue.value = withTiming(70, { duration: 300 })
            }
          }}
        >
          <Image source={require("../../assets/youtube.png")} style={{ width: 30, height: 30, tintColor: 'white' }} />
        </TouchableOpacity>

        <Animated.Text style={{color:'black' ,fontSize:16,fontWeight:'500',paddingLeft:165}}
        entering={BounceIn.duration(2700).springify()
          .damping(130)
          .mass(15)
          .stiffness(1)
          .overshootClamping(false)
          .restDisplacementThreshold(0.1)
          .restSpeedThreshold(5)}>
          hello world
        </Animated.Text>

        {/* animation with touchable opacity EX -2 */}
        {/* <TouchableOpacity style={{ width: '100%', height: 55, backgroundColor: '#119639',
         borderRadius: 30, marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color:'black' ,fontSize:16,fontWeight:'500'}}>
            Get Started
          </Text>

        </TouchableOpacity> */}

        {/* <Animatedbtn style={{ width: '100%', height: 55, backgroundColor: '#119639',
         borderRadius: 30, marginTop: 40, justifyContent: 'center', alignItems: 'center' }} 
         animation={'slideInUp'} 
         easing='Easing.bezier(0, 2, 1, -1)'>
          <Text style={{color:'black' ,fontSize:16,fontWeight:'500'}}>
            Get Started
          </Text>
        </Animatedbtn>

        <Animatedbtn style={{ width: '100%', height: 55, backgroundColor: '#119639',
         borderRadius: 30, marginTop: 40, justifyContent: 'center', alignItems: 'center' }} 
         animation={'slideInUp'} 
        >
          <Text style={{color:'black' ,fontSize:16,fontWeight:'500'}}>
            Get Started
          </Text>
        </Animatedbtn> */}



      </View>



    </View>
  )
}

export default Screen2