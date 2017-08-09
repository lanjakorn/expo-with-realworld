import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Button, Card } from 'react-native-elements'
import Colors from 'constants/Colors'
import { Icon } from 'react-native-elements'
import CategoriesList from './CategoriesList'
import Search from '@components/SearchContainer'

class CategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      tabBarLabel: 'Categories',
      tabBarIcon: ( { tintColor, focused } ) =>
        <FontAwesome
          name={'newspaper-o'}
          size={24}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />,
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40 }}>
            <Search navigation={navigation} navOnCancel={'house'} />
          </View>
        </View>
      ),
    }
  }

  render() {
    return <CategoriesList navigation={this.props.navigation} />
  }
}

const styles = StyleSheet.create( {} )

export default CategoriesScreen
