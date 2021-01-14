import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'


const VideoPlayer= ()=> {
  return (
    <View>
      <Text> VideoPlayer screen</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  }
})
export default VideoPlayer
