import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import { ScrollView } from 'react-native'
import Post from './PostsContainer'
import { HeaderNavigation } from '@components'

const ContactUsScreen = ( { navigation } ) =>
  <ScrollView>
    <Post navigation={navigation} />
  </ScrollView>

ContactUsScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'category' )}
    />
  ),
} )

ContactUsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContactUsScreen
