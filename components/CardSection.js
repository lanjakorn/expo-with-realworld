import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = ( { children } ) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  },
} )

export default CardSection
