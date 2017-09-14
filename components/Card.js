import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const styles = StyleSheet.create( {
  container: {
    borderColor: Colors.cardBorder,
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

const Card = ( { backgroundColor, children, margin = 0 } ) => {
  return (
    <View
      style={[
        styles.container,
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

Card.defaultProps = {
  backgroundColor: '#FFF',
  margin: 0,
}

Card.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  margin: PropTypes.number,
}

export default Card
