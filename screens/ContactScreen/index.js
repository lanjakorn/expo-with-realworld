import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Contact from './ContactContainer'
import { HeaderNavigation } from '@components'

const ContactScreen = ( { navigation } ) => (
  <ScrollView contentContainerStyle={styles.ScrollView}>
    <Contact navigation={navigation} />
  </ScrollView>
)

const styles = StyleSheet.create( { ScrollView: { flexGrow: 1 } } )

ContactScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title="Contact" />,
} )

ContactScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContactScreen
