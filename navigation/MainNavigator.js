import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Colors from 'constants/Colors'

import { Icon } from 'react-native-elements'
import HomeScreen from '@screens/HomeScreen'
import SearchScreen from '@screens/SearchScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import SettingsScreen from '@screens/SettingsScreen'

const MainNavigator = StackNavigator( {
  Root: {
    screen: TabNavigator(
      {
        home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ( { tintColor, focused } ) =>
              <Icon
                name={'home'}
                size={28}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />,
          },
        },
        house: {
          screen: CategoriesScreen,
          navigationOptions: {
            tabBarLabel: 'Ricoh House',
            tabBarIcon: ( { tintColor, focused } ) =>
              <Icon
                name={'dashboard'}
                size={25}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />,
          },
        },
        products: {
          screen: CategoriesScreen,
          navigationOptions: {
            tabBarLabel: 'Products',
            tabBarIcon: ( { tintColor, focused } ) =>
              <Icon
                name={'md-cube'}
                size={24}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                type={'ionicon'}
              />,
          },
        },
        search: {
          screen: SearchScreen,
          navigationOptions: {
            tabBarLabel: 'Services',
            tabBarIcon: ( { tintColor, focused } ) =>
              <Icon
                name={'tools'}
                size={22}
                type={'entypo'}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />,
          },
        },
        more: {
          screen: SettingsScreen.SettingsScreen,
          navigationOptions: {
            tabBarLabel: 'More',
            tabBarIcon: ( { tintColor, focused } ) =>
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
          tabBarIcon: ( { tintColor } ) => {
            Colors.darkTintColor
          },
          // tabStyle: {
          //   backgroundColor: 'red',
          //   padding: 10,
          //   width: 300,
          // },
        },
        lazy: true,
        tabBarPosition: 'bottom',
        initialRouteName: 'home',
      }
    ),
  },
  defaultTabSetting: {
    screen: SettingsScreen.DefaultTabSetting,
  },
  readabilitySetting: {
    screen: SettingsScreen.ReadabilitySetting,
  },
  regionSetting: {
    screen: SettingsScreen.RegionSetting,
  },
  sourcesSetting: {
    screen: SettingsScreen.SourcesSetting,
  },
} )

export default MainNavigator
