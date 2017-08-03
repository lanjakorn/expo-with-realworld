import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Colors from 'constants/Colors'

import { Icon } from 'react-native-elements'
import HomeScreen from '@screens/HomeScreen'
import SearchScreen from '@screens/SearchScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import ChildCategoriesScreen from '@screens/ChildCategoriesScreen'
import SettingsScreen from '@screens/SettingsScreen'

const HomeTab = StackNavigator( {
  home: {
    screen: HomeScreen,
    path: '/',
  },
} )

const CategoriesTab = StackNavigator( {
  categories: {
    screen: CategoriesScreen,
    path: '/',
  },
  childCategories: {
    screen: ChildCategoriesScreen,
    path: '/childcategories/name',
  },
} )

const ProductsTab = StackNavigator( {
  productc: {
    screen: CategoriesScreen,
    path: '/',
  },
} )

const SearchTab = StackNavigator( {
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const SettingsTab = StackNavigator( {
  settings: {
    screen: SettingsScreen.SettingsScreen,
    path: '/',
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

const TabNav = TabNavigator(
  {
    home: {
      screen: HomeTab,
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
      screen: CategoriesTab,
      path: '/',
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
      screen: ProductsTab,
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
      screen: SearchTab,
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
      screen: SettingsTab,
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
    },
    lazy: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    initialRouteName: 'home',
  }
)

const MainNav = StackNavigator(
  {
    main: {
      screen: TabNav,
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
  },
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#008CCA',
      },
      lazy: true,
      tabBarVisible: false,
    },
    headerMode: 'screen',
  }
)

export default TabNav
