import React, { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'

//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAdo1P5jy7mqjC1cSBKmXULUx4S40u62tE'

const SearchScreen= ({navigation})=> {
  const {colors}= useTheme()
  const mycolor= colors.iconColor
  const [value, setValue]= useState('')
  //const [miniCardData, setMiniCard]= useState([])
  const dispatch= useDispatch()
  const miniCardData= useSelector(state=> {
    return state.cardData
  })
  const [loading, setLoading] = useState(false)

  const fetchData= ()=> {
    setLoading(true)
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAdo1P5jy7mqjC1cSBKmXULUx4S40u62tE`)
    .then(res=> res.json())
    .then(data=> {
      setLoading(false)
      dispatch({type: 'add', payload: data.items})
      //setMiniCard(data.items)
    })
  }

  const webButtonsView= {
    backgroundColor:colors.headerColor,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    shadowColor: 'gray',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: .8,
  }

  return (
    <View style={styles.container}>
      <View style={webButtonsView}>
        <Ionicons
          color={mycolor}
          name='md-arrow-back'
          onPress={()=> navigation.goBack()}
          size={32} />
        <TextInput
          onChangeText={(text)=> setValue(text)}
          style={styles.inputStyles}
          value={value}
        />
        <Ionicons
          color={mycolor}
          onPress={fetchData}
          name='md-send'
          size={32}/>
      </View>
      { loading ? (
        <ActivityIndicator
          color='red'
          size='large'
          style={styles.activityIndicator}/>) : (null) }
      <FlatList
        data={miniCardData}
        keyExtractor={item=> item.id.videoId}
        renderItem={({item})=> {
          return <MiniCard
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
  activityIndicator: {
    marginTop: 10,
  },

  buttonsView: {
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    shadowColor: 'gray',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: .8,
  },

  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },

  inputStyles: {
    backgroundColor: '#e6e6e6',
    width: '70%',
  }

})
export default SearchScreen
