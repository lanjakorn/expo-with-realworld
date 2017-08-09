import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import CategoriesList from './CategoriesList'
import { HeaderNavigation } from '@components'

class SubChildCategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return <CategoriesList navigation={this.props.navigation} />
  }
}

const styles = StyleSheet.create( {} )

export default SubChildCategoriesScreen
