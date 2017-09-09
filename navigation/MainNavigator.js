import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Colors } from 'constants'
import config from 'config'
import { nav } from 'utilities'
import { ga } from 'services'

import { Icon } from 'react-native-elements'

import CategoriesScreen from '@screens/CategoriesScreen'
import ChildCategoriesScreen from '@screens/ChildCategoriesScreen'
import CompanyProfileScreen from '@screens/CompanyProfileScreen'
import ContactScreen from '@screens/ContactScreen'
import ContactUsScreen from '@screens/ContactUsScreen'
import FaqScreen from '@screens/FaqScreen'
import FeatureScreen from '@screens/FeatureScreen'
import HomeScreen from '@screens/HomeScreen'
import HouseCategoriesScreen from '@screens/HouseCategoriesScreen'
import HouseScreen from '@screens/HouseScreen'
import LoginScreen from '@screens/LoginScreen'
import MoresScreen from '@screens/MoresScreen'
import PostsScreen from '@screens/PostsScreen'
import ProductDetailScreen from '@screens/ProductDetailScreen'
import ProductsScreen from '@screens/ProductsScreen'
import SearchScreen from '@screens/SearchScreen'
import ServiceDetailScreen from '@screens/ServiceDetailScreen'
import ServicesScreen from '@screens/ServicesScreen'
// import SettingsScreen from '@screens/SettingsScreen'
import SolutionCategoriesScreen from '@screens/SolutionCategoriesScreen'
import SolutionScreen from '@screens/SolutionScreen'
import SubChildCategoriesScreen from '@screens/SubChildCategoriesScreen'

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
  feature: {
    screen: FeatureScreen,
    path: '/:index:module',
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
    screen: ServicesScreen,
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
    path: '/:module',
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
    screen: CompanyProfileScreen,
    path: '/',
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
    path: '/:category',
  },
  subChildCategories: {
    screen: SubChildCategoriesScreen,
    path: '/:childCategory',
  },
  products: {
    screen: ProductsScreen,
    path: '/:childCategory',
  },
  productDetail: {
    screen: ProductDetailScreen,
    path: '/productdetail/:name',
  },
  feature: {
    screen: FeatureScreen,
    path: '/:index:module',
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

const TabNav = TabNavigator(
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
    products: {
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
    initialRouteName: 'homes',
  }
)

const navTracker = () => {
  const tracker = new ga.Tracker( config.ga, config.app.name, config.app.version )
  return (
    <TabNav
      onNavigationStateChange={( prevState, currentState ) => {
        const currentScreen = nav.getCurrentRouteName( currentState )
        const prevScreen = nav.getCurrentRouteName( prevState )
        // console.log( currentScreen, prevScreen )
        if ( prevScreen !== currentScreen ) {
          tracker.trackScreenView( currentScreen )
        }
      }}
    />
  )
}

export default navTracker
