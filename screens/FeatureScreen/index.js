import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Feature from './FeatureContainer'
import { HeaderNavigation } from '@components'

class ContactUsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={'Feature'}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <Feature navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default ContactUsScreen
