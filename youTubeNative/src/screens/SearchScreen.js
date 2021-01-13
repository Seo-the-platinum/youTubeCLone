import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'


const SearchScreen= ()=> {
  const [value, setValue]= useState('')
  return (
    <View style={styles.container}>
      <View style={styles.buttonsView}>
        <Ionicons name='md-arrow-back' size={32} />
        <TextInput
          onChangeText={(text)=> setValue(text)}
          style={styles.inputStyles}
          value={value}
        />
        <Ionicons name='md-send' size={32}/>
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({

  buttonsView: {
    backgroundColor: 'white',
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
  },

  inputStyles: {
    backgroundColor: '#e6e6e6',
    width: '70%',
  }

})
export default SearchScreen
