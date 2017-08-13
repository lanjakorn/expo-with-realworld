import React from 'react'
import { Colors } from 'constants'
import { Button } from 'react-native-elements'

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

export default ButtonRadius
