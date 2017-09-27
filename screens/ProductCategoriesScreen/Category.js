import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, CardSection } from '@components'

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    alignContent: 'center',
    fontSize: 16,
    marginRight: 25,
    paddingRight: 25,
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10,
  },
  thumbnailStyle: {
    height: height * 0.2 - 14,
    width: width * 0.3,
  },
} )

const Category = ( { categoryHeading, categoryImage } ) =>
  <Card margin={0}>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: categoryImage }} />
      </View>

      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle} numberOfLines={2}>
          {categoryHeading}
        </Text>
      </View>
    </CardSection>
  </Card>

Category.propTypes = {
  categoryHeading: PropTypes.string.isRequired,
  categoryImage: PropTypes.string,
}

export default Category
