import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

export const TextError = ( { errors, prop } ) =>
  <View key={errors[ prop ]}>
    <Text
      key={`${ errors[ prop ][ 0 ] }`}
      style={{ paddingTop: 5, color: 'firebrick' }}
    >
      {errors[ prop ][ 0 ]}
    </Text>
  </View>

TextError.propTypes = {
  errors: PropTypes.object.isRequired,
  prop: PropTypes.string.isRequired,
}

export default TextError
