import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

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

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardSection
