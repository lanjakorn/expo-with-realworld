import React, { Component } from 'react'
import { nav } from 'utilities'

import Categories from './CategoriesContainer'
import { HeaderNavigation } from '@components'

class CategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={nav.getNavigationParam( navigation, 'category' )}
        />
      ),
    }
  }

  render() {
    return <Categories navigation={this.props.navigation} />
  }
}

export default CategoriesScreen
