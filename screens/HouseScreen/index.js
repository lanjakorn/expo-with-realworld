import React, { Component } from 'react'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Search } from '@components'
import HouseList from './HouseListContainer'

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

class HouseScreen extends Component {
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
      <View style={styles.container}>
        <HouseList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default HouseScreen
