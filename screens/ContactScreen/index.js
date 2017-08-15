import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Contact from './ContactContainer'
import { HeaderNavigation } from '@components'

class ContactScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return (
      <ScrollView>
        <Contact navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default ContactScreen
