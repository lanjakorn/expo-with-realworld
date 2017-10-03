import React from 'react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const ButtonRadius = ( { title, onPress, style } ) =>
  <Button
    backgroundColor={Colors.tintColor}
    borderRadius={5}
    fontSize={12.5}
    onPress={onPress}
    title={title}
    buttonStyle={{
      paddingBottom: 4,
      paddingTop: 4,
    }}
    containerViewStyle={{
      marginLeft: 0,
      marginRight: 0,
      ...style,
    }}
  />

ButtonRadius.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default ButtonRadius
