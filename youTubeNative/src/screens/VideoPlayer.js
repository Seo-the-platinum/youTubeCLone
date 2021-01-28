import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';

const VideoPlayer= ({route})=> {
  const { title, videoId }= route.params

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.playerView}>
      { Platform.OS === 'web' ?
        <iframe
          height= '100%'
          src={`https://www.youtube.com/embed/${videoId}`}
          width= '100%'
          />
          :
        <WebView
          domStorageEnabled={true}
          javaScriptEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />}
      </View>
      <Text
        ellipsizeMode='tail'
        numberOfLines={2}
        style={styles.videoText}>
        {title}
      </Text>
      <View style={{borderBottomWidth: 1}}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },

  playerView: {
    borderColor:'red',
    borderWidth: 2,
    height: 200,
    width: '100%',
  },

  videoText: {
    fontSize: 20,
    margin: 9,
    width: Dimensions.get('screen').width -50,
  },

})
export default VideoPlayer
