import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
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
              width: 25,
              textAlign: 'left',
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
              width: 25,
              textAlign: 'right',
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 24,
    height: 40,
    flexDirection: 'row',
  },
  leftSection: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
} )

export default HeaderNavigation
