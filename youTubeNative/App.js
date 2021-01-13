import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'
import Home from './src/screens/Home'
import SearchScreen from './src/screens/SearchScreen'

export default function App() {
  return (
    <View style={ styles.container}>
      {/*<Home />*/}
      <SearchScreen />
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  }
})
