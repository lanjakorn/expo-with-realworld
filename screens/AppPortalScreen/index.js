import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import AppPortal from './AppPortalContainer'
import { HeaderNavigation } from '@components'

const AppPortalScreen = ( { navigation } ) => (
  <AppPortal navigation={navigation} />
)

AppPortalScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'App Portal'} />,
} )

AppPortalScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AppPortalScreen
