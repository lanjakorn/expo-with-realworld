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
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { ga } from 'services'
import { object } from 'utilities'

import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 20,
    width: width * 1,
  },
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textDescription: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  textDescriptionSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
} )

const House = ( {
  actions,
  houseCategories,
  isFetchingHouseCategories,
  navigation,
} ) => {
  const onPressHouseCategoriesSelect = ( key, value ) => {
    ga.trackEvent( {
      eventCategory: 'houses',
      eventAction: 'select house category of house',
      eventLabel: value,
    } )
    actions.setCurrentHouseCategory( key )
    navigation.navigate( 'houseCategories', {
      category: value,
    } )
  }

  return (
    <ScrollView>
      <View>
        {!isFetchingHouseCategories
          ? Object.keys( houseCategories ).map( e =>
            <TouchableOpacity
              key={houseCategories[ e ].title}
              onPress={() =>
                onPressHouseCategoriesSelect( e, houseCategories[ e ].title )}
            >
              <Card margin={0} backgroundColor={'white'}>
                <View style={styles.searchListItemStyle}>
                  <Image
                    key={`image-${ houseCategories[ e ].title }`}
                    style={styles.backgroundImage}
                    source={{
                      uri: object.getFirstByKey( {
                        item: houseCategories[ e ].urls,
                        key: 'imgs',
                      } ),
                    }}
                  >
                    <View stlye={styles.textSection}>
                      <Text style={styles.text} numberOfLines={1}>
                        {houseCategories[ e ].title}
                      </Text>
                    </View>
                    <View stlye={styles.textDescriptionSection}>
                      <Text style={styles.textDescription}>
                        {houseCategories[ e ].description}
                      </Text>
                    </View>
                  </Image>
                </View>
              </Card>
            </TouchableOpacity>
          )
          : <View style={{ flex: 1 }}>
            <Spinner visible={true} />
          </View>}
      </View>
    </ScrollView>
  )
}

House.propTypes = {
  actions: PropTypes.shape( {
    setCurrentHouseCategory: PropTypes.func.isRequired,
  } ),
  houseCategories: PropTypes.object.isRequired,
  isFetchingHouseCategories: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default House
