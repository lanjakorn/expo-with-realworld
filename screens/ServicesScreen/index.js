import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { Search } from '@components'
import Services from './ServicesContainer'

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

const ServicesScreen = ( { navigation } ) => (
  <View style={styles.container}>
    <Services navigation={navigation} />
  </View>
)

ServicesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <Search navigation={navigation} navOnCancel={'serviceห'} />
    </View>
  ),
} )

ServicesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ServicesScreen
