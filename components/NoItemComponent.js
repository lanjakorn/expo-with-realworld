import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from 'constants/Colors'

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

const styles = StyleSheet.create( {
  alignContainers: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get( 'window' ).width,
    height: Dimensions.get( 'window' ).height - 150,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoHeadingStyle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },
  infoParagraphStyle: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    color: '#888',
    width: Dimensions.get( 'window' ).width / 1.75,
  },
  textStyle: {
    fontSize: 20,
  },
} )

export default NoItemComponent
