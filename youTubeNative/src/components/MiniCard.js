import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const MiniCard= ()=> {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: "https://images.unsplash.com/photo-1478250242432-9381e12b763b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=684&q=80"}}
        style={styles.backgroundImg}
      />
      <View style={styles.textView}>
        <Text
          ellipsizeMode= 'tail'
          numberOfLines={3}
          style={styles.titleText}>
          Title is here
        </Text>
        <Text
          style={styles.subText}
        >
          sub text here
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
