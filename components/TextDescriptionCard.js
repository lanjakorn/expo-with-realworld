import React from 'react'
import { Text, View } from 'react-native'

const styles = {
  textDescription: {
    fontSize: 12.5,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'justify',
  },
}

export const TextDescriptionCard = ( {
  containerstyle,
  textStyle = {},
  title,
} ) => {
  return (
    <View style={containerstyle}>
      <Text style={{ ...styles.textDescription, ...textStyle }}>
        {title}
      </Text>
    </View>
  )
}

export default TextDescriptionCard
