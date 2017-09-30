import config from 'config'

import React from 'react'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { Colors } from 'constants'

import {
  HomeTab,
  HouseTab,
  MoresTab,
  ProductsTab,
  ServiceTab,
} from './TabNavigator'

import TabBar from './TabBar'

const Nav = TabNavigator(
  {
    homes: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ( { focused } ) =>
          <Icon
            name={'home'}
            size={28}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />,
      },
    },
    houses: {
      screen: HouseTab,
      navigationOptions: {
        tabBarLabel: 'Ricoh House',
        tabBarIcon: ( { focused } ) =>
          <Icon
            name={'dashboard'}
            size={25}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />,
      },
    },
    productCategories: {
      screen: ProductsTab,
      navigationOptions: {
        tabBarLabel: 'Products',
        tabBarIcon: ( { focused } ) =>
          <Icon
            name={'md-cube'}
            size={24}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            type={'ionicon'}
          />,
      },
    },
    services: {
      screen: ServiceTab,
      navigationOptions: {
        tabBarLabel: 'Services',
        tabBarIcon: ( { focused } ) =>
          <Icon
            name={'tools'}
            size={22}
            type={'entypo'}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />,
      },
    },
    mores: {
      screen: MoresTab,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ( { focused } ) =>
          <Icon
            name={'ios-more'}
            size={35}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            type={'ionicon'}
            iconStyle={{ paddingTop: 4 }}
          />,
      },
    },
  },
  {
    tabBarComponent: ( { jumpToIndex, ...props } ) =>
      <TabBar jumpToIndex={jumpToIndex} {...props} />,
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 24,
        height: 24,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      tabBarIcon: () => {
        Colors.darkTintColor
      },
    },
    lazy: true,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: config.app.initialRouteName,
  }
)

const NavTracker = ( { dispatch, nav } ) =>
  <Nav navigation={addNavigationHelpers( { dispatch, state: nav } )} />

export { Nav, NavTracker }
