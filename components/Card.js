import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ( { backgroundColor, children, margin } ) => {
  return (
    <View
      style={[
        styles.containerStyle,
        {
          backgroundColor: backgroundColor,
          marginBottom: margin,
          marginLeft: margin,
          marginRight: margin,
        },
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create( {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginBottom: 10,
    marginTop: -1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textStyle: {
    fontSize: 20,
  },
} )

export default Card
