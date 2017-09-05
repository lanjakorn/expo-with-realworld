import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { View } from 'react-native'
import { Search } from '@components'
import Home from './HomesContainer'

const HomesScreen = ( { navigation } ) =>
  <View>
    <Home navigation={navigation} />
  </View>

HomesScreen.navigationOptions = ( { navigation } ) => {
  return {
    header: (
      <View style={{ backgroundColor: Colors.tintColor }}>
        <View style={{ marginTop: 24, height: 40 }}>
          <Search navigation={navigation} navOnCancel={'home'} />
        </View>
      </View>
    ),
  }
}

HomesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HomesScreen
