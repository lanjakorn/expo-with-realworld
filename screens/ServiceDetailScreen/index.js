import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import ServiceDetail from './ServiceDetailContainer'
import { HeaderNavigation } from '@components'

const ServiceDetailScreen = ( { navigation } ) => (
  <ScrollView removeClippedSubviews={false}>
    <ServiceDetail navigation={navigation} />
  </ScrollView>
)

ServiceDetailScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'service' )}
    />
  ),
} )

ServiceDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ServiceDetailScreen
