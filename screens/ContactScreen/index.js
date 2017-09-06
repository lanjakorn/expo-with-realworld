import React from 'react'
import PropTypes from 'prop-types'

import { ScrollView } from 'react-native'
import Contact from './ContactContainer'
import { HeaderNavigation } from '@components'

const ContactScreen = ( { navigation } ) =>
  <ScrollView>
    <Contact navigation={navigation} />
  </ScrollView>

ContactScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title="Contact" />,
} )

ContactScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContactScreen
