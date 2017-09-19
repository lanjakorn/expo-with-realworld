import React from 'react'
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { object } from 'utilities'

const styles = StyleSheet.create( {
  productContainer: {
    padding: 5,
    paddingBottom: 25,
    width: '50%',
  },
  productImage: {
    alignSelf: 'center',
    height: 140,
    marginBottom: 10,
    width: 140,
  },
  productName: {
    fontWeight: 'bold',
  },
  productsContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
} )

const Product = ( { dataSourceProducts, onPressSelectProduct } ) => {
  const renderProducts = ( { id, name, urls } ) => {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity
          key={id}
          onPress={() => onPressSelectProduct( id, name )}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.productImage}
              source={{
                uri: object.getFirstByKey( {
                  item: urls,
                  key: 'imgs',
                } ),
              }}
            />
          </View>
          <Text style={styles.productName}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return dataSourceProducts.length !== 0
    ? <ListView
      contentContainerStyle={styles.productsContainer}
      dataSource={dataSourceProducts}
      renderRow={renderProducts}
    />
    : <View />
}

Product.propTypes = {
  // dataSourceProducts: PropTypes.object,
  onPressSelectProduct: PropTypes.func.isRequired,
}

export default Product
