import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'

const mycolor= '#212121'

export default function Header() {
  return (
    <View style={ styles.container}>
      <View style={styles.ytLogoView}>
        <AntDesign style={styles.ytLogo} name="youtube" size={32} color="red" />
        <Text style={styles.ytLogoText}>YouTube</Text>
      </View>
      <View style={styles.iconsView}>
        <Ionicons name="md-videocam" size={32} color={mycolor}/>
        <Ionicons name="md-search" size={32} color={mycolor}/>
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 4,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginTop: Constant.statusBarHeight,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: .8,
  },

  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },

  ytLogo: {
    marginLeft: 20,
  },

  ytLogoText: {
    color: mycolor,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  ytLogoView: {
    flexDirection: 'row',
    margin: 5,
  },

})
