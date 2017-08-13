import React, { Component } from 'react'
import { Colors } from 'constants'

import { ScrollView, View, StyleSheet, Text, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Button, Icon } from 'react-native-elements'
import { Search, CustomSearchBar } from '@components'
import HouseList from './HouseListContainer'

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

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
  },
} )

export default HouseScreen
