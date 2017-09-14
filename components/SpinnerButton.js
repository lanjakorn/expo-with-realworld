import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const SpinnerButton = ( { containerStyle, size } ) => {
  const style = { ...styles.spinnerStyle, ...containerStyle }
  return (
    <View style={style}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

SpinnerButton.propTypes = {
  containerStyle: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
}

export default SpinnerButton
