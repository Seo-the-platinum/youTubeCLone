import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'

//find out why mycolor has to be outside of the header comp,
// but other consts work inside

export default function Header() {
  const navigation= useNavigation()
  const {colors}= useTheme()
  const mycolor= colors.iconColor
  const dispatch= useDispatch()
  const currentTheme= useSelector(state=> {
    return state.myDarkMode
  })

  return (
    <View style={{...styles.container, backgroundColor:colors.headerColor}}>
      <View style={styles.ytLogoView}>
        <AntDesign style={styles.ytLogo} name="youtube" size={32} color="red" />
        <Text style={{...styles.ytLogoText, color: mycolor}}>YouTube</Text>
      </View>
      <View style={styles.iconsView}>
        <Ionicons name="md-videocam" size={32} color={mycolor}/>
        <Ionicons
          color={mycolor}
          name="md-search"
          onPress={()=> navigation.navigate('search')}
          size={32} />
        <MaterialIcons
          color={mycolor}
          name="account-circle"
          onPress={()=> dispatch({type: 'change_theme', payload:!currentTheme})} 
          size={32} />
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    elevation: 4,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginTop: Constant.statusBarHeight,
    shadowColor: 'gray',
    shadowOffset: {
      height: 1,
      width: 1,
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
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  ytLogoView: {
    flexDirection: 'row',
    margin: 5,
  },

})
