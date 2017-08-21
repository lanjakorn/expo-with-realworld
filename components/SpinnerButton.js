import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Spinner = ( { size, containerStyle } ) => {
  const style = { ...styles.spinnerStyle, ...containerStyle }
  return (
    <View style={style}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

export default Spinner
