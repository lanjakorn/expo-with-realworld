import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
} )

const HeaderTitle = ( {
  containerstyle,
  textTitle,
  buttonOnPress,
  buttontitle,
} ) =>
  <View style={containerstyle}>
    <View
      style={{
        alignSelf: 'flex-start',                
        flex: 2,        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      <Text style={[ styles.title ]}>
        {textTitle}
      </Text>
    </View>
    <View
      style={{
        alignSelf: 'flex-start',        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      <ButtonRadius onPress={buttonOnPress} title={buttontitle} />
    </View>
  </View>

export default HeaderTitle
