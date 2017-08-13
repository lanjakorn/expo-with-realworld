import React from 'react'
import { Colors } from 'constants'

import { Text, StyleSheet, View } from 'react-native'
import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    color: Colors.tintColor,
    fontSize: 16,
    fontWeight: '400',
  },
} )

const HeaderButtonSection = ( {
  containerstyle,
  textTitle,
  buttonOnPress,
  buttontitle,
} ) =>
  <View style={containerstyle}>
    <Text style={styles.title}>
      {textTitle}
    </Text>
    <ButtonRadius onPress={buttonOnPress} title={buttontitle} />
  </View>

export default HeaderButtonSection
