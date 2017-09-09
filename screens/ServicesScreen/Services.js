import React, { Component } from 'react'
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
import { object } from 'utilities'

import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  searchListItemStyle: {
    alignItems: 'center',
    borderColor: '#686666',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    height: height * 0.2 - 20,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: width * 1,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  textService: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
} )

const Services = ( { services, isFetching, actions, navigation } ) => {
  const onPressServiceSelect = ( key, value ) => {
    actions.setCurrentService( key )
    navigation.navigate( 'serviceDetail', {
      service: value,
    } )
  }
  return (
    <ScrollView>
      <View>
        {!isFetching
          ? Object.keys( services ).map( e =>
            <TouchableOpacity
              key={e}
              onPress={() => onPressServiceSelect( e, services[ e ].title )}
            >
              <Card margin={0} backgroundColor={'white'}>
                <View style={styles.searchListItemStyle}>
                  <Image
                    key={`image-${ e }`}
                    style={styles.backgroundImage}
                    source={{
                      uri: object.getFirstByKey( {
                        item: services[ e ].urls,
                        key: 'imgs',
                      } ),
                    }}
                  >
                    <View stlye={styles.textService}>
                      <Text style={styles.text} numberOfLines={1}>
                        {services[ e ].title}
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

Services.propTypes = {
  actions: PropTypes.shape( {
    setCurrentService: PropTypes.func.isRequired,
  } ),
  services: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Services
