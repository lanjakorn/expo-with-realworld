import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    color: Colors.tintColor,
    fontSize: 16,
    fontWeight: '400',
  },
} )

const HeaderButtonSection = ( {
  buttonOnPress,
  buttontitle,
  containerstyle,
  textTitle,
} ) =>
  <View style={containerstyle}>
    <Text style={styles.title}>
      {textTitle}
    </Text>
    <ButtonRadius onPress={buttonOnPress} title={buttontitle} />
  </View>

HeaderButtonSection.propTypes = {
  buttonOnPress: PropTypes.func.isRequired,
  buttontitle: PropTypes.string.isRequired,
  containerstyle: PropTypes.number,
  textTitle: PropTypes.string.isRequired,
}

export default HeaderButtonSection
