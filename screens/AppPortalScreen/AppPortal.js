import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { Colors } from 'constants'
import { object } from 'utilities'

import {
  CardContentImage,
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
  thumbnailView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsView: {
    marginBottom: 22,
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
} )

const NewsLetter = ( { apps, onPressAppSelect } ) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.tintColor,
        // backgroundColor: 'white',

        height: Dimensions.get( 'window' ).height,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      {Object.keys( apps ).map( ( e, k ) => {
        return (
          <TouchableOpacity
            key={`app-portal-${ e }`}
            onPress={() =>
              onPressAppSelect(
                apps[ e ].appStoreId,
                apps[ e ].appStoreLocale,
                apps[ e ].playStoreId
              )}
          >
            <View
              style={{
                // marginLeft: 15,
                // marginRight: 15,
                // marginTop: 10,
                marginBottom: 35,

                flexDirection: 'column',
                // justifyContent: 'center',
                flexGrow: 1,
                alignItems: 'center',
                width: Dimensions.get( 'window' ).width / 3 - 10,
              }}
            >
              <Image
                style={{
                  height: 70,
                  width: 70,
                  marginBottom: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.075)',
                  borderRadius: 10,
                }}
                source={{
                  uri: apps[ e ].iconUrl,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  marginTop: 10,
                  color: 'white',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {apps[ e ].appName}
              </Text>
            </View>
          </TouchableOpacity>
        )
      } )}
    </View>
  )
}

export default NewsLetter
