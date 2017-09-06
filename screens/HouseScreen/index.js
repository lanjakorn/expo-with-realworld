import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Search } from '@components'
import HouseList from './HouseListContainer'

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

const HouseScreen = ( { navigation } ) =>
  <View style={styles.container}>
    <HouseList navigation={navigation} />
  </View>

HouseScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <View style={{ marginTop: 24, height: 40 }}>
        <Search navigation={navigation} navOnCancel={'home'} />
      </View>
    </View>
  ),
} )

HouseScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HouseScreen
