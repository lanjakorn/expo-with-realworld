import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Colors from 'constants/Colors'

import { Icon } from 'react-native-elements'

import CategoriesScreen from '@screens/CategoriesScreen'
import ChildCategoriesScreen from '@screens/ChildCategoriesScreen'
import ContactScreen from '@screens/ContactScreen'
import ContactUsScreen from '@screens/ContactUsScreen'
import HomeScreen from '@screens/HomeScreen'
import HouseScreen from '@screens/HouseScreen'
import HouseCategoriesScreen from '@screens/HouseCategoriesScreen'
import ProductDetailScreen from '@screens/ProductDetailScreen'
import ProductsScreen from '@screens/ProductsScreen'
import SearchScreen from '@screens/SearchScreen'
import SettingsScreen from '@screens/SettingsScreen'
import SolutionScreen from '@screens/SolutionScreen'
import SolutionCategoriesScreen from '@screens/SolutionCategoriesScreen'
import SubChildCategoriesScreen from '@screens/SubChildCategoriesScreen'
import FaqScreen from '@screens/FaqScreen'
import ServiceScreen from '@screens/ServiceScreen'
import ServiceDetailScreen from '@screens/ServiceDetailScreen'
import MoresScreen from '@screens/MoresScreen'
import LoginScreen from '@screens/LoginScreen'
import PostsScreen from '@screens/PostsScreen'

const HomeTab = StackNavigator( {
  index: {
    screen: HomeScreen,
    path: '/',
  },
  promotions: {
    screen: PostsScreen,
    path: '/:category',
  },
  companyProfiles: {
    screen: PostsScreen,
    path: '/:category',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const HouseTab = StackNavigator( {
  product: {
    screen: HouseScreen,
    path: '/',
  },
  houseCategories: {
    screen: HouseCategoriesScreen,
    path: '/:category',
  },
  solution: {
    screen: SolutionScreen,
    path: '/:solution',
  },
  solutionCategories: {
    screen: SolutionCategoriesScreen,
    path: '/:category',
  },
  contactUs: {
    screen: ContactUsScreen,
    path: '/',
  },
  productDetail: {
    screen: ProductDetailScreen,
    path: '/productdetail/:id:module',
  },
  contact: {
    screen: ContactScreen,
    path: '/',
  },
  faq: {
    screen: FaqScreen,
    path: '/',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const ServiceTab = StackNavigator( {
  contact: {
    screen: ServiceScreen,
    path: '/',
  },
  serviceDetail: {
    screen: ServiceDetailScreen,
    path: '/:service',
  },
} )

const MoresTab = StackNavigator( {
  index: {
    screen: MoresScreen,
    path: '/',
  },
  login: {
    screen: LoginScreen,
    path: '/',
  },
  promotions: {
    screen: PostsScreen,
    path: '/:category',
  },
  companyProfiles: {
    screen: PostsScreen,
    path: '/:category',
  },
  caseStudies: {
    screen: PostsScreen,
    path: '/:category',
  },
  newsLetters: {
    screen: PostsScreen,
    path: '/:category',
  },
  apps: {
    screen: PostsScreen,
    path: '/:category',
  },
  touchs: {
    screen: PostsScreen,
    path: '/:category',
  },
  contactUs: {
    screen: ContactUsScreen,
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
  faq: {
    screen: FaqScreen,
    path: '/',
  },
  contact: {
    screen: ContactScreen,
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

// const MoresTab = StackNavigator( {
//   settings: {
//     screen: SettingsScreen.SettingsScreen,
//     path: '/',
//   },
//   defaultTabSetting: {
//     screen: SettingsScreen.DefaultTabSetting,
//   },
//   readabilitySetting: {
//     screen: SettingsScreen.ReadabilitySetting,
//   },
//   regionSetting: {
//     screen: SettingsScreen.RegionSetting,
//   },
//   sourcesSetting: {
//     screen: SettingsScreen.SourcesSetting,
//   },
//   search: {
//     screen: SearchScreen,
//     path: '/',
//   },
// } )

const TabNav = TabNavigator(
  {
    homes: {
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
    houses: {
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
      screen: ServiceTab,
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
    initialRouteName: 'homes',
  }
)

export default TabNav
