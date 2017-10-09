import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

import { Colors } from 'constants'
import { resolution } from 'utilities'

const styles = StyleSheet.create( {
  container: {
    marginTop: resolution.baseNavMarginTop(),
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  leftSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
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
      <LinearGradient
        colors={[ '#CE1D45', '#E0244F', '#E33B61' ]}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <Icon
              size={32}
              color={'white'}
              name={'ios-arrow-back'}
              type={'ionicon'}
              underlayColor={'transparent'}
              underlineColorAndroid={'transparent'}
              onPress={() => {
                navigation.goBack( null )
              }}
              iconStyle={{
                backgroundColor: 'transparent',
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
              size={34}
              color={'white'}
              name={'ios-search'}
              type={'ionicon'}
              underlayColor={'transparent'}
              underlineColorAndroid={'transparent'}
              onPress={() => {
                navigation.navigate( 'search', { module: 'search' } )
              }}
              iconStyle={{
                backgroundColor: 'transparent',
                textAlign: 'right',
                width: 50,
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

HeaderNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default HeaderNavigation
