import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'

import ProductDetail from './ProductDetail'
import { object } from 'utilities'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const Products = ( { actions, isFetching, navigation, products } ) => {
  const onPressSelectProduct = id => {
    actions.setCurrentProductOfProductCategory( id )
    actions.getFaqsByProduct( id )
    navigation.navigate( 'productDetail', {
      id: id,
      module: 'productCategories',
    } )
  }

  const renderProducts = () => {
    return Object.keys( products ).map( ( e, k ) =>
      <TouchableOpacity
        key={`product-touch-${ products[ e ].name }-${ k }`}
        onPress={() => onPressSelectProduct( e )}
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
  }

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
  actions: PropTypes.shape( {
    getFaqsByProduct: PropTypes.func.isRequired,
    setCurrentProductOfProductCategory: PropTypes.func.isRequired,
  } ),
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
}

export default Products
