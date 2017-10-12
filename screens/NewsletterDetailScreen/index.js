import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Newsletter from './NewsletterContainer'
import { HeaderNavigation } from '@components'

const EShopScreen = ( { navigation } ) => (
  <ScrollView removeClippedSubviews={false}>
    <Newsletter navigation={navigation} />
  </ScrollView>
)

EShopScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Newsletter'} />,
} )

EShopScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default EShopScreen
