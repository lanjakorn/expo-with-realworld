import React from 'react'
import { Platform, View, Text, PixelRatio } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = {
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    minWidth: 50,
    borderRadius: 90 / PixelRatio.get(),
    marginTop: 8,
  },
  text: {
    marginLeft: 4,
    color: '#ccc',
    fontWeight: '600',
    fontSize: 12,
  },
}

const Pros = ( { name } ) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row', marginRight: 12 }}>
        <Text
          style={{
            color: Colors.textDescription,
            fontSize: 16,
          }}
        >
          {'•'}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color: Colors.textDescription,
            fontSize: 16,
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  )
}

export default Pros
