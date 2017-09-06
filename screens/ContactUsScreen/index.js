import React from 'react'
import PropTypes from 'prop-types'

import ContactUs from './ContactUsContainer'
import { HeaderNavigation } from '@components'

const ContactUsScreen = ( { navigation } ) =>
  <ContactUs navigation={navigation} />

ContactUsScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Contact Us'} />,
} )

ContactUsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContactUsScreen
