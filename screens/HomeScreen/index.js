import React, { Component } from 'react'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Search } from '@components'
import HomeList from './HomeListContainer'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 15,
  },
} )

class HomeScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
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

  render() {
    return (
      <View>
        <HomeList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default HomeScreen
