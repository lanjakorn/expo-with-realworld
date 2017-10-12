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

const NewsLetter = ( { newsletters, onPressSelectNewsletter } ) => {
  return (
    <View>
      {Object.keys( newsletters ).map( ( e, k ) => {
        return (
          <TouchableOpacity
            key={`newsletters-${ newsletters[ e ].title }`}
            onPress={() => onPressSelectNewsletter( e )}
          >
            <Card
              containerStyle={{
                marginLeft: 15,
                marginRight: 15,
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
                    item: newsletters[ e ].urls,
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
                {newsletters[ e ].title}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                }}
                numberOfLines={2}
              >
                {newsletters[ e ].description}
              </Text>
            </Card>
          </TouchableOpacity>
        )
      } )}
    </View>
  )
}

export default NewsLetter
