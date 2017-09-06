import React from 'react'
import PropTypes from 'prop-types'

import { Colors } from 'constants'
import { ScrollView, View } from 'react-native'
import Mores from './MoresContainer'
import { Search } from '@components'

const MoresScreen = ( { navigation } ) =>
  <ScrollView>
    <Mores navigation={navigation} />
  </ScrollView>

MoresScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <View style={{ marginTop: 24, height: 40 }}>
        <Search navigation={navigation} navOnCancel={'mores'} />
      </View>
    </View>
  ),
} )

MoresScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MoresScreen
