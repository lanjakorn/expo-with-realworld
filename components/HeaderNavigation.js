import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Colors from 'constants/Colors'
const isIos = Platform.OS === 'ios'
const isIphoneX = isIos && Dimensions.get( 'window' ).height === 812
const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: isIphoneX ? 22 + 14 : 22,
  },
  leftSection: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
} )

const HeaderNavigation = ( { navigation, title } ) => {
  return (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Icon
            size={32}
            color={'white'}
            name={'ios-arrow-back'}
            type={'ionicon'}
            underlayColor={Colors.tintColor}
            onPress={() => {
              navigation.goBack( null )
            }}
            iconStyle={{
              backgroundColor: Colors.tintColor,
              textAlign: 'left',
              width: 50,
            }}
          />
        </View>
        <View style={styles.centerSection}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Icon
            size={28}
            color={'white'}
            name={'ios-search'}
            type={'ionicon'}
            underlayColor={Colors.tintColor}
            onPress={() => {
              navigation.navigate( 'search', { module: 'search' } )
            }}
            iconStyle={{
              backgroundColor: Colors.tintColor,
              textAlign: 'right',
              width: 50,
            }}
          />
        </View>
      </View>
    </View>
  )
}

HeaderNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default HeaderNavigation
