import React from 'react'
import { Text } from 'react-native'

export default ( MonoText = props => {
  return <Text {...props} style={[ props.style, { fontFamily: 'space-mono' } ]} />
} )
