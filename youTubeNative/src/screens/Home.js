import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

export default function HomeScreen({navigation}) {
  const cardData= useSelector(state=> {
    return state
  })
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={cardData}
        keyExtractor={item=> item.id.videoId}
        renderItem={({item})=> {
          return <Card
            channel={item.snippet.channelTitle}
            title={item.snippet.title}
            videoId={item.id.videoId}
          />
        }}
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1
  }
})
