import { combineReducers } from 'redux'
import { reducers as searchReducers } from 'modules/Search'
import { reducers as settingsReducer } from 'modules/Settings'

const rootReducer = combineReducers( {
  ...searchReducers,
  ...settingsReducer,
} )

export default rootReducer
