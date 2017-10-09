import React from 'react'
import PropTypes from 'prop-types'

import NewsLetter from './NewsLetter'
import { HeaderNavigation } from '@components'

const EShopScreen = ( { navigation } ) => <NewsLetter navigation={navigation} />

EShopScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Newsletter'} />,
} )

EShopScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default EShopScreen
