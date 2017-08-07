import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create( {
  wrapper: {
    fontWeight: '600',
    fontSize: 13,
  },
} )

const ProductDescription = ( { name } ) =>
  <Text style={styles.wrapper}>
    {name}
  </Text>

ProductDescription.propTypes = {
  name: PropTypes.string,
}

export default ProductDescription
