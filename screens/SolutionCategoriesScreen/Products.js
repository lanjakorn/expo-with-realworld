import React, { Component } from 'react'
import values from 'lodash/values'
import { object } from 'utilities'

import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create( {
  productsContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  productContainer: { padding: 5, width: '50%', paddingBottom: 25 },
  productImage: {
    alignSelf: 'center',
    height: 140,
    marginBottom: 10,
    width: 140,
  },
  productName: { fontWeight: 'bold' },
} )

const Faq = ( { dataSourceProducts, onPressSelectProduct } ) => {
  const renderProducts = ( { id, name, urls } ) => {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity key={id} onPress={() => onPressSelectProduct( id )}>
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

export default Faq
