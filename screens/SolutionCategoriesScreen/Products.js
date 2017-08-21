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

class Faq extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )

    this.dataSource = ds.cloneWithRows( values( this.props.products ) )
  }

  renderProducts = product => {
    const {
      productContainer,
      imageContainer,
      productImage,
      productName,
    } = styles
    const { id, name, urls } = product

    return (
      <View style={productContainer}>
        <TouchableOpacity
          key={id}
          onPress={() => this.props.onPressSelectProduct( id )}
        >
          <View style={imageContainer}>
            <Image
              style={productImage}
              source={{
                uri: object.getFirstByKey( {
                  item: urls,
                  key: 'imgs',
                } ),
              }}
            />
          </View>
          <Text style={productName}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.productsContainer}
        dataSource={this.dataSource}
        renderRow={this.renderProducts}
      />
    )
  }
}

export default Faq
