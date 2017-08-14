import React, { Component } from 'react'
import { Colors } from 'constants'

import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Search } from '@components'
import SearchList from './SearchListContainer'

class SearchScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      tabBarLabel: 'Search',
      tabBarIcon: ( { focused } ) =>
        <Icon
          name={'search'}
          size={24}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />,
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40 }}>
            <Search navigation={navigation} navOnCancel={'search'} />
          </View>
        </View>
      ),
    }
  }

  render() {
    return (
      <View>
        <SearchList navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create( {} )

export default SearchScreen
