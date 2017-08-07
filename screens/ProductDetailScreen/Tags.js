import React from 'react'
import { Platform, View, Text, PixelRatio } from 'react-native'
import PropTypes from 'prop-types'
import { Badge } from 'react-native-elements'
import { Colors } from 'constants'

const commaNumber = require( 'comma-number' )

let filledIconName = 'ios-star'
let emptyIconName = 'ios-star-outline'
if ( Platform.OS === 'android' ) {
  filledIconName = 'md-star'
  emptyIconName = 'md-star-outline'
}

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

const RatingView = ( { name, style } ) => {
  const { wrapper } = styles
  return (
    <Badge
      value={name.toUpperCase()}
      textStyle={{ color: 'white', fontSize: 12 }}
      containerStyle={{
        backgroundColor: Colors.tintColor,
        ...styles.icon,
        ...style,
      }}
    />
  )
}

RatingView.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  style: PropTypes.object,
}

export default RatingView
