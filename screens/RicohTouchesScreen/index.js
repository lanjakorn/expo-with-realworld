import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import Touches from './TouchesContainer'
import { HeaderNavigation } from '@components'

const RicohTouchesScreen = ( { navigation } ) => (
  <Touches navigation={navigation} />
)

RicohTouchesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'category' )}
    />
  ),
} )

RicohTouchesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default RicohTouchesScreen
