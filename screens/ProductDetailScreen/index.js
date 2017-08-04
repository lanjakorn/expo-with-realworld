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
import ProductCard from './ProductCard'
import { HeaderNavigation, Search } from '@components'

class CategoriesScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    const props = {
      name: 'ASF-121',
      offer: {
        price: {
          currency: '$',
          value: 120,
        },
        salePrice: {
          currency: '$',
          value: 120,
        },
      },
      reviewScore: 12,
      reviewCount: 555,
      image:
        'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/styles/product_image_large/public/SPC435DN_m1.jpg?itok=icvPvixG',
    }
    return <ProductCard navigation={this.props.navigation} {...props} />
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
