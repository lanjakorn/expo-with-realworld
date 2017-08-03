import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Button } from 'react-native-elements'
import Colors from 'constants/Colors'
import { Icon } from 'react-native-elements'
import CategoriesList from './CategoriesList'
import Search from '@components/SearchContainer'

class CategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      title: 'Products',
      headerRight: (
        <FontAwesome
          name={'cog'}
          size={24}
          style={{ color: Colors.tintColor, marginRight: 10 }}
          onPress={() => {
            navigation.goBack( null )
          }}
        />
      ),
    }
  }

  render() {
    return <CategoriesList navigation={this.props.navigation} />
  }
}

const styles = StyleSheet.create( {
  cardInfoStyle: {
    flexDirection: 'row',
    marginRight: 5,
    padding: 5,
  },
  cardStyle: {
    marginLeft: 17,
    marginRight: 17,
    marginTop: 20,
    marginBottom: 20,
  },
  storyImageStyle: {
    marginLeft: -15,
    marginRight: -17,
    marginTop: -20,
    marginBottom: 20,
    height: 150,
    right: 1,
    top: 1,
  },
  sourceIconStyle: {
    width: 40,
    height: 40,
  },
  infoTextStyle: {
    marginLeft: 10,
    marginRight: 25,
    paddingRight: 15,
    alignContent: 'center',
  },
} )

export default CategoriesScreen
