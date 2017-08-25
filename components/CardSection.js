import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: '#fff',
    borderColor: '#dddddd',
    borderBottomWidth: 2,    
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  },
} )

const CardSection = ( { children } ) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  )
}

export default CardSection
