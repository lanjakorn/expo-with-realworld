import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import CompanyProfile from './CompanyProfileContainer'
import { HeaderNavigation } from '@components'

class ContactUsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title="Company Profile"
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <CompanyProfile navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default ContactUsScreen
