import React from 'react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const ButtonRadiusOutlined = ( { title, onPress, style } ) =>
  <Button
    color={Colors.tintColor}
    backgroundColor={'#fff'}
    borderRadius={5}
    fontSize={12.5}
    onPress={onPress}
    title={title}
    buttonStyle={{
      borderColor: Colors.tintColor,
      borderRadius: 50,
      borderWidth: 1,
      paddingBottom: 4,
      paddingTop: 4,
    }}
    containerViewStyle={{
      marginLeft: 0,
      marginRight: 0,
      ...style,
    }}
  />

ButtonRadiusOutlined.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default ButtonRadiusOutlined
