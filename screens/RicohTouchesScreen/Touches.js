import React from 'react'
import {
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import TouchesDetail from './TouchesDetail'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const Touches = ( { onPressSelectTouches, touches } ) => {
  const renderProducts = () =>
    Object.keys( touches ).map( ( e, k ) => {
      return (
        <TouchableOpacity
          key={`ricoh-touch-${ touches[ e ].title }-${ k }`}
          onPress={() =>
            onPressSelectTouches(
              touches[ e ].title,
              object.getFirstByKey( {
                item: touches[ e ].urls,
                key: 'docs',
              } )
            )}
        >
          <Card
            containerStyle={{
              width: Dimensions.get( 'window' ).width / 2 - 23,
              marginLeft: ( k + 1 ) % 2 === 0 ? 7.5 : 15,
              marginRight: ( k + 1 ) % 2 !== 0 ? 7.5 : 15,
              marginTop: 10,
              marginBottom: 10,
              flexGrow: 1,
              justifyContent: 'space-between',
            }}
          >
            <Image
              style={{
                height: 200,
                marginBottom: 5,
                backgroundColor: 'rgba(0, 0, 0, 0.075)',
              }}
              source={{
                uri: object.getFirstByKey( {
                  item: touches[ e ].urls,
                  key: 'imgs',
                } ),
              }}
            />
            <Text
              style={{
                fontSize: 12.5,
                fontWeight: '500',
                marginBottom: 5,
              }}
            >
              {touches[ e ].title}
            </Text>
            <Text
              style={{
                fontSize: 11,
              }}
            >
              {touches[ e ].description}
            </Text>
          </Card>
        </TouchableOpacity>
      )
    } )

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 16,
          paddingRight: 20,
          paddingTop: 20,
          marginBottom: 10,
          backgroundColor: 'white',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
          }}
        >
          {'Documents'}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {renderProducts()}
      </View>
    </ScrollView>
  )
}

Touches.propTypes = {
  navigation: PropTypes.object.isRequired,
  onPressSelectTouches: PropTypes.func.isRequired,
  touches: PropTypes.object.isRequired,
}

export default Touches
