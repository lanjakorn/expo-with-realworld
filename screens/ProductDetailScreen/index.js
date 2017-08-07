import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import ProductCard from './ProductCard'
import { HeaderNavigation } from '@components'

class CategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return (
      <ScrollView>
        <ProductCard navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default CategoriesScreen
