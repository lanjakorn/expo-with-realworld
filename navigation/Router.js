import { createRouter } from '@expo/ex-navigation'

import SettingsScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen'
import RootNavigation from './RootNavigation'

export default createRouter( () => ( {
  settings: () => SettingsScreen,
  search: () => SearchScreen,
  rootNavigation: () => RootNavigation,
} ) )
