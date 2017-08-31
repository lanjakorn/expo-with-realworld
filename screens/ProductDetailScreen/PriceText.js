import React from 'react'
import { string } from 'utilities'

import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = {
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
}

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
  price: PropTypes.object,
  salePrice: PropTypes.object,
  style: PropTypes.number,
  words: PropTypes.object,
}

PriceText.defaultProps = {}

export default PriceText
