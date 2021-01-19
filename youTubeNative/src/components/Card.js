import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'

const Card= (props)=> {
  const navigation= useNavigation()
  const { colors }= useTheme()
  const textColor= colors.iconColor
  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('videoPlayer', {videoId: props.videoId, title: props.title})}>
      <View stlye={styles.cardContainer}>
        <Image
          source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
          style={styles.backgroundImg}
        />
        <View style={styles.cardTitleView}>
          <MaterialIcons name='account-circle' size={40} color='#212121'/>
          <View>
            <Text
              ellipsizeMode='tail'
              numberOfLines={2}
              style={{...styles.cardTitle, color: textColor}}
            > {props.title}</Text>
            <Text style={{color: textColor}}> {props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  )
}

const styles= StyleSheet.create({
  backgroundImg: {
    height: 200,
    width: '100%'
  },

  cardContainer: {
    elevation: 4,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: .8,
  },

  cardTitle: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 50,
  },

  cardTitleView: {
    flexDirection: 'row',
    margin: 5,
  },

})

export default Card
