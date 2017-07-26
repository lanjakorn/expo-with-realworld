import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
} )

export default CardSection
