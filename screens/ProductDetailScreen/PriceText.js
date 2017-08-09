import React from 'react'
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

const PriceText = ( { price, salePrice, style, words } ) =>
  <View style={[ styles.wrapper, style ]}>
    <Text
      style={styles.price}
    >{`${ words.price } ${ price.value } ${ words.baht }`}</Text>
  </View>

PriceText.propTypes = {
  price: PropTypes.object,
  salePrice: PropTypes.object,
  style: PropTypes.object,
  words: PropTypes.object,
}

PriceText.defaultProps = {}

export default PriceText
