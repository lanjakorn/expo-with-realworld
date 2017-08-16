import React, { Component } from 'react'

import { ScrollView } from 'react-native'
import SolutionContainer from './SolutionContainer'
import { HeaderNavigation } from '@components'

class SolutionScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={navigation.state.params.solution}
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

export default SolutionScreen
