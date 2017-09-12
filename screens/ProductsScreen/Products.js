import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import ProductDetail from './ProductDetail'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const Products = ( { isFetching, onPressSelectProduct, products } ) => {
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
      {!isFetching
        ? <View style={styles.container}>
          {renderProducts()}
        </View>
        : <View style={{ flex: 1 }}>
          <Spinner visible={true} />
        </View>}
    </ScrollView>
  )
}

Products.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onPressSelectProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
}

export default Products
