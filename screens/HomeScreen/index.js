import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { Search } from '@components'
import Home from './HomesContainer'

const HomesScreen = ( { navigation } ) => (
  <View>
    <Home navigation={navigation} />
  </View>
)

HomesScreen.navigationOptions = ( { navigation } ) => {
  return {
    header: (
      <View style={{ backgroundColor: Colors.tintColor }}>
        <Search navigation={navigation} navOnCancel={'home'} />
      </View>
    ),
  }
}

HomesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HomesScreen
