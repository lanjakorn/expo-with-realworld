import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import ProductDetail from './ProductDetail'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const Products = ( { onPressSelectProduct, products } ) => {
  const renderProducts = () =>
    Object.keys( products ).map( ( e, k ) =>
      <TouchableOpacity
        key={`product-touch-${ products[ e ].name }-${ k }`}
        onPress={() => onPressSelectProduct( e, products[ e ].name )}
      >
        <ProductDetail
          key={`product-${ products[ e ].name }-${ k }`}
          productImage={object.getFirstByKey( {
            item: products[ e ].urls,
            key: 'imgs',
          } )}
          productHeading={products[ e ].name}
        />
      </TouchableOpacity>
    )

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderProducts()}
      </View>
    </ScrollView>
  )
}

Products.propTypes = {
  navigation: PropTypes.object.isRequired,
  onPressSelectProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
}

export default Products
