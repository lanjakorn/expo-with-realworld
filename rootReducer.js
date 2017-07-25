import { combineReducers } from 'redux'
import * as searchReducer from '@screens/SearchScreen/reducers'
import * as settingsReducer from '@screens/SettingsScreen/reducers'

const rootReducer = combineReducers( {
  settings: settingsReducer.settings,
  search: searchReducer.search
} )

export default rootReducer
