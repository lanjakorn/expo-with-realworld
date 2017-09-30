import React from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import Mores from './MoresContainer'
import { Search } from '@components'

const MoresScreen = ( { navigation } ) => (
  <ScrollView>
    <Mores navigation={navigation} />
  </ScrollView>
)

MoresScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <Search navigation={navigation} navOnCancel={'mores'} />
    </View>
  ),
} )

MoresScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MoresScreen
