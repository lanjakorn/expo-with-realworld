import React from 'react'
import { Colors } from 'constants'
import { Button } from 'react-native-elements'

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

export default ButtonRadiusOutlined
