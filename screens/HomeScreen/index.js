import React, { Component } from 'react'
import { Colors } from 'constants'

import { ScrollView, View, StyleSheet, Text, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Button, Icon } from 'react-native-elements'
import { Search } from '@components'
import HomeList from './HomeListContainer'

class HomeScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      tabBarLabel: 'Home',
      tabBarIcon: ( { tintColor, focused } ) =>
        <Icon
          name={'search'}
          size={24}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />,
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

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 15,
  },
} )

export default HomeScreen
