import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Card= (props)=> {
  return (
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
            style={
              styles.cardTitle
            }
          > {props.title}</Text>
          <Text> {props.channel}</Text>
        </View>
      </View>
    </View>
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
