import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

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

HeaderSection.propTypes = {
  containerStyle: PropTypes.number,
  textTitle: PropTypes.string.isRequired,
}

export default HeaderSection
