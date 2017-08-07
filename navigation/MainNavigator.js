import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Colors from 'constants/Colors'

import { Icon } from 'react-native-elements'

import HomeScreen from '@screens/HomeScreen'
import SearchScreen from '@screens/SearchScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import ChildCategoriesScreen from '@screens/ChildCategoriesScreen'
import SubChildCategoriesScreen from '@screens/SubChildCategoriesScreen'
import ProductsScreen from '@screens/ProductsScreen'
import ProductDetailScreen from '@screens/ProductDetailScreen'
import ContactUsScreen from '@screens/ContactUsScreen'

import SettingsScreen from '@screens/SettingsScreen'

const HomeTab = StackNavigator( {
  home: {
    screen: HomeScreen,
    path: '/',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const HouseTab = StackNavigator( {
  productc: {
    screen: SettingsScreen.SourcesSetting,
    path: '/',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const ProductsTab = StackNavigator( {
  categories: {
    screen: CategoriesScreen,
    path: '/',
  },
  childCategories: {
    screen: ChildCategoriesScreen,
    path: '/childcategories/name',
  },
  subChildCategories: {
    screen: SubChildCategoriesScreen,
    path: '/subchildcategories/name',
  },
  products: {
    screen: ProductsScreen,
    path: '/product/:categories',
  },
  productDetail: {
    screen: ProductDetailScreen,
    path: '/productdetail/:name',
  },
  contactUs: {
    screen: ContactUsScreen,
    path: '/',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const ServicesTab = StackNavigator( {
  services: {
    screen: SettingsScreen.SourcesSetting,
    path: '/',
  },
} )

const MoresTab = StackNavigator( {
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
  search: {
    screen: SearchScreen,
    path: '/',
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
      screen: HouseTab,
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
    services: {
      screen: ServicesTab,
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
    mores: {
      screen: MoresTab,
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
    animationEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: 'home',
  }
)

export default TabNav
