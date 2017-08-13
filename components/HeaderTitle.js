import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
} )

const HeaderTitle = ( {
  containerstyle,
  textTitle,
  buttonOnPress,
  buttontitle,
} ) =>
  <View style={containerstyle}>
    <Text style={[ styles.title ]}>
      {textTitle}
    </Text>
    <ButtonRadius onPress={buttonOnPress} title={buttontitle} />
  </View>

export default HeaderTitle
