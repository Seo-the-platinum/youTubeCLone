import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Card= ()=> {
  return (
    <View stlye={styles.cardContainer}>
      <Image
        source={{uri: "https://images.unsplash.com/photo-1478250242432-9381e12b763b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=684&q=80"}}
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
          > this is an amazing course and this a title and there should be 3 dots and you will learn alot</Text>
          <Text> this is an amazing course</Text>
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
