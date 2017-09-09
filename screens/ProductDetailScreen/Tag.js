import React from 'react'
import { PixelRatio, StyleSheet } from 'react-native'
import { Badge } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const styles = StyleSheet.create( {
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    marginTop: 8,
    minWidth: 50,
    backgroundColor: Colors.tintColor,
    borderRadius: 90 / PixelRatio.get(),
  },
  text: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
} )

const Tag = ( { name, style } ) =>
  <Badge
    value={name.toUpperCase()}
    textStyle={{ color: 'white', fontSize: 12 }}
    containerStyle={[ styles.icon, style ]}
  />

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Tag
