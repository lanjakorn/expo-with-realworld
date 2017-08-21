import React, { Component } from 'react'

import { ScrollView } from 'react-native'
import ServiceDetail from './ServiceDetail'
import { HeaderNavigation } from '@components'

class ServiceDetailScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <HeaderNavigation
          navigation={navigation}
          title={navigation.state.params.service}
        />
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <ServiceDetail navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default ServiceDetailScreen
