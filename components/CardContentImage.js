import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop: 30,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowDescription: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
    color: Colors.textDescription,
  },
  rowImage: {
    width: Dimensions.get( 'window' ).width,
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: height * 0.3,
    width: Dimensions.get( 'window' ).width,
  },
} )

const CardContentImage = ( { description, title, url, limitLine } ) => {
  const {
    containerStyle,
    descriptionText,
    image,
    rowDescription,
    rowImage,
    rowTitle,
    titleText,
  } = styles

  return (
    <View style={containerStyle}>
      <View style={rowImage}>
        <Image resizeMode="cover" source={{ uri: url }} style={image} />
      </View>
      <View style={rowTitle}>
        <Text style={titleText}>{title}</Text>
      </View>
      <View style={rowDescription}>
        {limitLine ? (
          <Text style={descriptionText} numberOfLines={2}>
            {description}
          </Text>
        ) : (
          <Text style={descriptionText}>{description}</Text>
        )}
      </View>
    </View>
  )
}

CardContentImage.defaultProps = {
  limitLine: true,
}

CardContentImage.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  limitLine: PropTypes.bool.isRequired,
}

export default CardContentImage
