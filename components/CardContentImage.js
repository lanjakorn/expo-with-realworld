import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowDescription: {
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign:'justify',    
    color: Colors.textDescription,    
  },
  rowImage: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: height * 0.3,
    width: width * 0.9 + 10,
  },
} )

const CardContentImage = ( { description, title, url, limitLine = true } ) => {
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
        <Text style={titleText}>
          {title}
        </Text>
      </View>
      <View style={rowDescription}>
        {limitLine
          ? <Text style={descriptionText} numberOfLines={2}>
            {description}
          </Text>
          : <Text style={descriptionText}>
            {description}
          </Text>}
      </View>
    </View>
  )
}

export default CardContentImage
