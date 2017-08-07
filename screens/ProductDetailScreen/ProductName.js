import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create( {
  wrapper: {
    fontWeight: '600',
    fontSize: 18,
  },
} )

const ProductName = ( { name, style } ) =>
  <Text style={[ styles.wrapper, style ]}>
    {name}
  </Text>

ProductName.propTypes = {
  name: PropTypes.string,
}

export default ProductName
