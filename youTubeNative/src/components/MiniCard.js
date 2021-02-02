import React from 'react'
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

const MiniCard= (props)=> {
  const navigation= useNavigation()
  const {colors}= useTheme()
  const textColor= colors.iconColor


  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('videoPlayer', {videoId: props.videoId, title: props.title})}
    >
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
          style={styles.backgroundImg}
        />
        <View style={styles.textView}>
          <Text
            ellipsizeMode= 'tail'
            numberOfLines={3}
            style={{...styles.titleText, color: textColor}}>
            {props.title}
          </Text>
          <Text
            style={{...styles.subText, color: textColor}}
          >
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({

  backgroundImg: {
    height: Platform.OS === 'web' ? '100%': 100,
    width: '45%'
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
    height: Platform.OS === 'web' ? 300 : '100%',
  },

  subText: {
    fontSize: 12,
  },

  textView: {
    paddingLeft: 7,
  },

  titleText: {
    fontSize: 15,
    width: Dimensions.get('screen').width/2,
  },
})

export default MiniCard
