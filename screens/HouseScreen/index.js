import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { Search } from '@components'
import House from './HouseContainer'

const styles = StyleSheet.create( {
  container: {
    // marginTop: 15,
  },
} )

const HouseScreen = ( { navigation } ) => (
  <View style={styles.container}>
    <House navigation={navigation} />
  </View>
)

HouseScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <Search navigation={navigation} navOnCancel={'home'} />
    </View>
  ),
} )

HouseScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HouseScreen
