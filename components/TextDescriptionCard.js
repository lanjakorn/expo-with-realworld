import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create( {
  textDescription: {
    fontSize: 12.5,
    fontWeight: '600',
  },
} )

export const TextDescriptionCard = ( { containerstyle, title } ) =>
  <View style={containerstyle}>
    <Text style={styles.textDescription}>
      {title}
    </Text>
  </View>

export default TextDescriptionCard
