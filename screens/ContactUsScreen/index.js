import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import ContactUsCard from './ContactUsCard'
import { HeaderNavigation } from '@components'

class ContactScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return <ContactUsCard navigation={this.props.navigation} />
  }
}

export default ContactScreen
