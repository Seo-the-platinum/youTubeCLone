import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const LittleCard= ({name})=> {
  return (
    <View style={styles.littleCard}>
      <Text style={styles.littleCardText}>
        {name}
      </Text>
    </View>
  )
}
const Explore= ()=> {
  const cardData= useSelector(state=> {
    return state.cardData
  })
  return (
    <View style={styles.container}>
      <Header/>
        <FlatList
          data={cardData}
          keyExtractor={item=> item.id.videoId}
          ListHeaderComponent={
            <>
              <View style={styles.cardsGroupView}>
                <LittleCard name='Gaming'/>
                <LittleCard name='Trending'/>
                <LittleCard name='Music'/>
                <LittleCard name='News'/>
                <LittleCard name='Movies'/>
                <LittleCard name='Fashion'/>
              </View>
              <Text style={styles.topicHeader}> Trending Videos</Text>
            </>
          }
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
    flex: 1,
  },

  cardsGroupView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  littleCard: {
    backgroundColor: 'red',
    borderRadius: 4,
    height: 50,
    width: 180,
  },

  littleCardText: {
    color: 'white',
    fontSize: 22,
    marginTop: 5,
    textAlign: 'center'
  },

  topicHeader: {
    fontSize: 22,
    margin: 8,
    textDecorationLine: 'underline',
  },

})
export default Explore
