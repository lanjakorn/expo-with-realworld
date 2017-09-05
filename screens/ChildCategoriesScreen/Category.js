import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { Card, CardSection } from '@components'

const { width } = Dimensions.get( 'window' )
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

const Category = ( { StoryImage, StoryHeading } ) =>
  <Card margin={0}>
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

Category.propTypes = {
  StoryImage: PropTypes.string.isRequired,
  StoryHeading: PropTypes.string.isRequired,
}

export default Category
