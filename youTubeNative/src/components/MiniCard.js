import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const MiniCard= (props)=> {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
        style={styles.backgroundImg}
      />
      <View style={styles.textView}>
        <Text
          ellipsizeMode= 'tail'
          numberOfLines={3}
          style={styles.titleText}>
          {props.title}
        </Text>
        <Text
          style={styles.subText}
        >
          {props.channel}
        </Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({

  backgroundImg: {
    height: 100,
    width: '45%'
  },

  container: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
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
