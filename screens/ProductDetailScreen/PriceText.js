import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'
import { string } from 'utilities'

const styles = StyleSheet.create( {
  price: {
    color: Colors.tintColor,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
} )

const PriceText = ( { price, style, words } ) =>
  <View style={[ styles.wrapper, style ]}>
    <Text style={styles.price}>{`${ words.price } ${ string.formatMoney( {
      digit: 0,
      num: price.value,
      showDigit: false,
      showSymbol: false,
      symbol: '฿',
      symbolBack: true,
    } ) } ${ words.baht }`}</Text>
  </View>

PriceText.propTypes = {
  price: PropTypes.object.isRequired,
  style: PropTypes.number,
  words: PropTypes.object.isRequired,
}

export default PriceText
