import React from 'react'
import { PixelRatio } from 'react-native'
import PropTypes from 'prop-types'
import { Badge } from 'react-native-elements'
import { Colors } from 'constants'

// const commaNumber = require( 'comma-number' )

const styles = {
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    borderRadius: 90 / PixelRatio.get(),
    marginRight: 8,
    marginTop: 8,
    minWidth: 50,
  },
  text: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
}

const Tag = ( { name, style } ) =>
  <Badge
    value={name.toUpperCase()}
    textStyle={{ color: 'white', fontSize: 12 }}
    containerStyle={{
      backgroundColor: Colors.tintColor,
      ...styles.icon,
      ...style,
    }}
  />

Tag.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  style: PropTypes.object,
}

export default Tag
