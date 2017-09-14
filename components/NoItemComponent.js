import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const styles = StyleSheet.create( {
  alignContainers: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get( 'window' ).height - 150,
    width: Dimensions.get( 'window' ).width,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoHeadingStyle: {
    fontSize: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  infoParagraphStyle: {
    color: '#888',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    width: Dimensions.get( 'window' ).width / 1.75,
  },
} )

const NoItemComponent = ( { iconName, infoHeading, infoParagraph } ) => {
  return (
    <View style={styles.alignContainers}>
      <View style={styles.containerStyle}>
        <Icon name={iconName} size={64} color={Colors.tabIconDefault} />
        <Text style={styles.infoHeadingStyle}>
          {infoHeading}
        </Text>
        <Text style={styles.infoParagraphStyle}>
          {infoParagraph}
        </Text>
      </View>
    </View>
  )
}

NoItemComponent.propTypes = {
  iconName: PropTypes.string.isRequired,
  infoHeading: PropTypes.string.isRequired,
  infoParagraph: PropTypes.string.isRequired,
}

export default NoItemComponent
