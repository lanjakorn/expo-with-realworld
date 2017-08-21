import React, { Component } from 'react'
import { Colors } from 'constants'

import { ScrollView, View } from 'react-native'
import Mores from './MoresContainer'
import { Search, HeaderNavigation } from '@components'

class MoresScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40 }}>
            <Search navigation={navigation} navOnCancel={'mores'} />
          </View>
        </View>
      ),
    }
  }

  render() {
    return (
      <ScrollView>
        <Mores navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default MoresScreen
