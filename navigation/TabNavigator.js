import { StackNavigator } from 'react-navigation'
import { nav } from 'utilities'

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
import ProductCategoriesScreen from '@screens/ProductCategoriesScreen'
import ProductChildCategoriesScreen from '@screens/ProductChildCategoriesScreen'
import ProductDetailScreen from '@screens/ProductDetailScreen'
import ProductsScreen from '@screens/ProductsScreen'
import ProductSubChildCategoriesScreen from '@screens/ProductSubChildCategoriesScreen'
import SearchScreen from '@screens/SearchScreen'
import ServiceDetailScreen from '@screens/ServiceDetailScreen'
import ServicesScreen from '@screens/ServicesScreen'
import SolutionCategoriesScreen from '@screens/SolutionCategoriesScreen'
import SolutionScreen from '@screens/SolutionScreen'
import EShopScreen from '@screens/EShopScreen'
// import PassCodeScreen from '@screens/LoginScreen/PassCode'

const HomeTab = StackNavigator(
  {
    homes: {
      screen: HomeScreen,
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
    search: {
      screen: SearchScreen,
      path: '/',
    },
  },
  {
    mode: 'card',
    cardStyle: { backgroundColor: 'white' },
  }
)

const HouseTab = StackNavigator( {
  houses: {
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
    path: '/:module',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const ServiceTab = StackNavigator( {
  services: {
    screen: ServicesScreen,
    path: '/',
  },
  serviceDetail: {
    screen: ServiceDetailScreen,
    path: '/:service',
  },
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const MoresTab = StackNavigator( {
  mores: {
    screen: MoresScreen,
    path: '/:module',
  },
  login: {
    screen: LoginScreen,
    path: '/',
  },
  // loginPassCode: {
  //   screen: PassCodeScreen,
  //   path: '/',
  // },
  eshops: {
    screen: EShopScreen,
    path: '/',
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
  search: {
    screen: SearchScreen,
    path: '/',
  },
} )

const ProductsTab = StackNavigator( {
  productCategories: {
    screen: ProductCategoriesScreen,
    path: '/',
  },
  productChildCategories: {
    screen: ProductChildCategoriesScreen,
    path: '/:category',
  },
  productSubChildCategories: {
    screen: ProductSubChildCategoriesScreen,
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
    path: '/:module',
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

HomeTab.router.getStateForAction = nav.navigateOnce(
  HomeTab.router.getStateForAction
)
HouseTab.router.getStateForAction = nav.navigateOnce(
  HouseTab.router.getStateForAction
)
MoresTab.router.getStateForAction = nav.navigateOnce(
  MoresTab.router.getStateForAction
)
ProductsTab.router.getStateForAction = nav.navigateOnce(
  ProductsTab.router.getStateForAction
)
ServiceTab.router.getStateForAction = nav.navigateOnce(
  ServiceTab.router.getStateForAction
)

export { HomeTab, HouseTab, MoresTab, ProductsTab, ServiceTab }
