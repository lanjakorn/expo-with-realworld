import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  prefix: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 12,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    color: Colors.textDescription,
    fontSize: 15,
  },
} )

const Pros = ( { name } ) => {
  return (
    <View style={styles.wrapper}>
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

export default Pros