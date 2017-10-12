import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Newsletters from './NewslettersContainer'
import { HeaderNavigation } from '@components'

const NewslettersScreen = ( { navigation } ) => (
  <ScrollView removeClippedSubviews={false}>
    <Newsletters navigation={navigation} />
  </ScrollView>
)

NewslettersScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Newsletter'} />,
} )

NewslettersScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default NewslettersScreen
