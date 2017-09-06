import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { ScrollView } from 'react-native'
import ServiceDetail from './ServiceDetail'
import { HeaderNavigation } from '@components'

const ServiceDetailScreen = ( { navigation } ) =>
  <ScrollView>
    <ServiceDetail navigation={navigation} />
  </ScrollView>

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
