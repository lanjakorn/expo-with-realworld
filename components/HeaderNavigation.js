import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from 'constants/Colors'
import { Icon } from 'react-native-elements'

const HeaderNavigation = ( { navigation, title } ) => {
  return (
    <View style={{ backgroundColor: Colors.tintColor }}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Icon
            color={'white'}
            iconStyle={{
              backgroundColor: Colors.tintColor,
              textAlign: 'left',
              width: 25,
            }}
            name={'ios-arrow-back'}
            size={32}
            type={'ionicon'}
            onPress={() => {
              navigation.goBack( null )
            }}
          />
        </View>
        <View style={styles.centerSection}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Icon
            color={'white'}
            iconStyle={{
              backgroundColor: Colors.tintColor,
              textAlign: 'right',
              width: 25,
            }}
            name={'ios-search'}
            size={28}
            type={'ionicon'}
            onPress={() => {
              //navigation.navigate( 'search' )
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 24,
  },
  leftSection: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
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

export default HeaderNavigation
