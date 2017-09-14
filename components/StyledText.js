import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const MonoText = props => {
  return <Text {...props} style={[ props.style, { fontFamily: 'space-mono' } ]} />
}

MonoText.propTypes = {
  style: PropTypes.object,
}

export default MonoText
