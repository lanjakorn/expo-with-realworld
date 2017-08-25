import React from 'react'
import { Dimensions, Text, StyleSheet, View } from 'react-native'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  prefix: {
    flexDirection: 'row',
    marginRight: 12,
  },
  title: {
    flexDirection: 'row',
    width: width * 0.8 + 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textDescription,    
  },
} )

const Pro = ( { name } ) => {
  return (
    <View style={styles.container}>
      <View style={styles.prefix}>
        <Text
          style={{
            color: Colors.textDescription,
            fontSize: 16,
          }}
        >
          {'•'}
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>
          {name}
        </Text>
      </View>
    </View>
  )
}

export default Pro
