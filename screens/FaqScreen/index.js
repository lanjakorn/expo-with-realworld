import React, { Component } from 'react'
import Faq from './FaqContainer'
import { HeaderNavigation } from '@components'

class FaqScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'FAQ'} />,
    }
  }

  render() {
    return <Faq navigation={this.props.navigation} />
  }
}

export default FaqScreen
