import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentText: {
    color: Colors.textDescription,
    fontSize: 13,
  },
} )

const CardContent = ( { description, title } ) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text style={styles.contentText} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default CardContent
