import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0000CD',
    marginRight: 10,
  },
  salePrice: {
    color: '#ccc',
    fontWeight: '600',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
}

const PriceText = ( { price, salePrice, style } ) =>
  <View style={[ styles.wrapper, style ]}>
    <Text style={styles.price}>{`${ price.currency } ${ price.value }`}</Text>
    {salePrice &&
      <Text
        style={styles.salePrice}
      >{`${ salePrice.currency } ${ salePrice.value }`}</Text>}
  </View>

PriceText.propTypes = {
  price: PropTypes.object,
  salePrice: PropTypes.object,
  style: PropTypes.object,
}

PriceText.defaultProps = {}

export default PriceText
