import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ProductsList from './ProductsList'
import { HeaderNavigation } from '@components'

class ProductsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return <ProductsList navigation={this.props.navigation} />
  }
}

const styles = StyleSheet.create( {} )

export default ProductsScreen
