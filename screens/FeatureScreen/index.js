import React from 'react'
import PropTypes from 'prop-types'

import { ScrollView } from 'react-native'
import Feature from './FeatureContainer'
import { HeaderNavigation } from '@components'

const ContactUsScreen = ( { navigation } ) =>
  <ScrollView>
    <Feature navigation={navigation} />
  </ScrollView>

ContactUsScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Feature'} />,
} )

ContactUsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContactUsScreen
