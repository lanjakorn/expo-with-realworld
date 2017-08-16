import React, { Component } from 'react'

import { ScrollView } from 'react-native'
import SolutionContainer from './SolutionContainer'
import { HeaderNavigation } from '@components'

class SolutionCategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={navigation.state.params.category}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <SolutionContainer navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default SolutionCategoriesScreen
