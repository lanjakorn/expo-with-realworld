import React from 'react'
import PropTypes from 'prop-types'

import EShop from './EShop'
import { HeaderNavigation } from '@components'

const EShopScreen = ( { navigation } ) => <EShop navigation={navigation} />

EShopScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Ricoh eShop'} />,
} )

EShopScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default EShopScreen
