import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
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

const ProductsDetail = ( { productImage, productHeading } ) => {
  return (
    <Card margin={10}>
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

export default ProductsDetail
