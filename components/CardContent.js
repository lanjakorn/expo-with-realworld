import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'constants'

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
    marginBottom: 10,
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
    color: Colors.textDescription,
  },
} )

const CardContent = ( { description, title } ) => {
  const { containerStyle, rowTitle, titleText, rowDescription, descriptionText } = styles
  return (
    <View style={containerStyle}>
      <View style={rowTitle}>
        <Text style={titleText}>
          {title}
        </Text>
      </View>
      <View style={rowDescription}>
        <Text style={descriptionText} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default CardContent
