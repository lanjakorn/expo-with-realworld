import React from 'react'
import { Platform, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

const commaNumber = require( 'comma-number' )

let filledIconName = 'ios-star'
let emptyIconName = 'ios-star-outline'
if ( Platform.OS === 'android' ) {
  filledIconName = 'md-star'
  emptyIconName = 'md-star-outline'
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
  },
  text: {
    marginLeft: 4,
    color: '#ccc',
    fontWeight: '600',
    fontSize: 12,
  },
}

const RatingView = ( { rating, reviewCount, style } ) => {
  const { wrapper } = styles
  return (
    <View style={[ wrapper, style ]}>
      <Icon
        name={filledIconName}
        size={18}
        color="#FFD700"
        style={styles.icon}
      />
      <Text style={styles.text}>{`(${ commaNumber( reviewCount ) })`}</Text>
    </View>
  )
}

RatingView.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  style: PropTypes.object,
}

export default RatingView
