import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import Touch from './Touch'
import { HeaderNavigation } from '@components'

const RicohTouchDetailScreen = ( { navigation } ) => (
  <Touch navigation={navigation} />
)

RicohTouchDetailScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'title' )}
    />
  ),
} )

RicohTouchDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default RicohTouchDetailScreen
