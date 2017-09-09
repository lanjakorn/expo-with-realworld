import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, CardSection } from '@components'

const { width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 14,
    width: width * 0.85 - 40,
    alignContent: 'center',
  },
  thumbnailStyle: {
    height: 40,
    width: 40,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
} )

const ProductsDetail = ( { productHeading, productImage } ) => {
  return (
    <Card margin={0}>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: productImage }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle} numberOfLines={2}>
            {productHeading}
          </Text>
        </View>
      </CardSection>
    </Card>
  )
}

ProductsDetail.propTypes = {
  productHeading: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
}

export default ProductsDetail
