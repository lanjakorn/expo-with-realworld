import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Colors from 'constants/Colors'

import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import StoriesScreen from '../screens/StoriesScreen'
import SettingsScreen from '../screens/SettingsScreen'

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
          screen: StoriesScreen,
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
          screen: SearchScreen,
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
        services: {
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
                iconStyle={{ paddingTop: 8 }}
              />,
          },
        },
      },
      {
        tabBarOptions: {
          activeTintColor: Colors.tintColor,
          showLabel: true,
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
          },
          tabBarIcon: ( { tintColor } ) => {
            Colors.darkTintColor
          },
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
