import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Card from '@components/Card'
import CardSection from '@components/CardSection'

const { height, width } = Dimensions.get( 'window' )

const CategoriesDetail = ( { StoryImage, StoryHeading } ) => {
  return (
    <Card margin={10}>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: StoryImage }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle} numberOfLines={2}>
            {StoryHeading}
          </Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create( {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 16,
    width: width * 0.85 - 100,
    // marginRight: 25,
    // paddingRight: 25,
    alignContent: 'center',
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
} )

export default CategoriesDetail
