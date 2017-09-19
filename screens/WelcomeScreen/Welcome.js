import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Colors } from 'constants'

import { MainNavigator } from 'navigation'

const styles = StyleSheet.create( {
  backgroundImage: {
    height: 89,
    width: 254,
  },
  container: {
    backgroundColor: Colors.tintColor,
  },
} )

const Welcome = ( { isFetching } ) =>
  <View style={styles.container}>
    <Image
      source={require( '../../assets/images/ricoh-logo-welcome.png' )}
      style={styles.backgroundImage}
    />
  </View>

export default Welcome
