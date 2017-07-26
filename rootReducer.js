import { combineReducers } from 'redux'
import { reducers as searchReducers } from '@screens/SearchScreen/exports'
import { reducers as settingsReducer } from '@screens/SettingsScreen/exports'

const rootReducer = combineReducers( {
  // searchReducers
  search: searchReducers.search,

  // settingsReducer
  settings: settingsReducer.settings,
} )

export default rootReducer
