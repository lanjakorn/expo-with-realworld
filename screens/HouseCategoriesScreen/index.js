import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import HouseCategoriesCard from './HouseCategoriesCard'
import { HeaderNavigation } from '@components'

class HouseCategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Categories'} />,
    }
  }

  render() {
    return (
      <ScrollView>
        <HouseCategoriesCard navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default HouseCategoriesScreen
