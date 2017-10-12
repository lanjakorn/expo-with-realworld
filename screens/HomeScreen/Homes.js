import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import verticalMenu from 'mocks/verticalMenu'

import { Card } from '@components'
const companyProfiles = require( '../../assets/images/vertical-menu/company-profile-2x.jpg' )
const productCategories = require( '../../assets/images/vertical-menu/products-2x.jpg' )
const eShop = require( '../../assets/images/vertical-menu/ricoh-eshop-2x.jpg' )
const houses = require( '../../assets/images/vertical-menu/ricoh-house-2x.jpg' )
const services = require( '../../assets/images/vertical-menu/services-2x.jpg' )

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: width * 0.58,
    width: width,
  },
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },

  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
} )

const Homes = ( { verticalMenu } ) => {
  const mapImage = key => {
    switch ( key ) {
    case 'companyProfiles':
      return companyProfiles
    case 'productCategories':
      return productCategories
    case 'eShop':
      return eShop
    case 'houses':
      return houses
    case 'services':
      return services
    }
  }

  const renderVerticalMenu = () =>
    Object.keys( verticalMenu ).map( ( e, k ) => {
      return (
        <TouchableOpacity
          key={e}
          onPress={() => verticalMenu[ e ].onPressMenuSelect( verticalMenu[ e ] )}
        >
          <Card margin={0} backgroundColor={'white'}>
            <View style={styles.searchListItemStyle}>
              <Image
                key={`image-${ e }`}
                resizeMode="stretch"
                source={mapImage( verticalMenu[ e ].img )}
                style={styles.backgroundImage}
              >
                <Text style={styles.text} numberOfLines={1}>
                  {''}
                </Text>
              </Image>
            </View>
          </Card>
        </TouchableOpacity>
      )
    } )

  return <ScrollView>{renderVerticalMenu()}</ScrollView>
}

Homes.propTypes = {
  verticalMenu: PropTypes.object.isRequired,
}

export default Homes
