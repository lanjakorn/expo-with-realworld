import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Product from './ProductContainer'
import { HeaderNavigation } from '@components'

class HouseCategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return (
      <ScrollView>
        <Product navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default HouseCategoriesScreen
