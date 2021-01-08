import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1
  }
})
