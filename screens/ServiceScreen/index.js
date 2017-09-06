import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Search } from '@components'
import ServiceList from './ServiceListContainer'

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

const ServicesScreen = ( { navigation } ) =>
  <View style={styles.container}>
    <ServiceList navigation={navigation} />
  </View>

ServicesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <View style={{ marginTop: 24, height: 40 }}>
        <Search navigation={navigation} navOnCancel={'serviceห'} />
      </View>
    </View>
  ),
} )

ServicesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ServicesScreen
