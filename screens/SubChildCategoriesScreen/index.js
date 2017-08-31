import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import { HeaderNavigation } from '@components'

class SubChildCategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={navigation.state.params.childCategory}
        />
      ),
    }
  }

  render() {
    return <CategoriesList navigation={this.props.navigation} />
  }
}

export default SubChildCategoriesScreen
