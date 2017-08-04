import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create( {
  wrapper: {
    fontWeight: '600',
    fontSize: 13,
  },
} )

const ProductName = ( { name } ) =>
  <Text style={styles.wrapper}>
    {name}
  </Text>

ProductName.propTypes = {
  name: PropTypes.string,
}

export default ProductName
