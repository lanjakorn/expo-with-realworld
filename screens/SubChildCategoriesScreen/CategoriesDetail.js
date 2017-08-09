import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Card, CardSection } from '@components'

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
    alignContent: 'center',
    fontSize: 16,
    width: width * 0.85 - 100,
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
} )

export default CategoriesDetail
