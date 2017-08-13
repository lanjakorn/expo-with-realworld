import React from 'react'
import { Colors } from 'constants'

import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    color: Colors.tintColor,
    fontSize: 16,
    fontWeight: '400',
  },
} )

const HeaderSection = ( { containerstyle, textTitle } ) =>
  <View style={containerstyle}>
    <Text style={styles.title}>
      {textTitle}
    </Text>
    <Icon
      color={Colors.iconGrey}
      name={'documents'}
      size={20}
      type={'entypo'}
      iconStyle={{
        textAlign: 'left',
        width: 20,
      }}
    />
  </View>

export default HeaderSection
