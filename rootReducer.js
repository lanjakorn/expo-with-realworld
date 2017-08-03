import { combineReducers } from 'redux'
import { reducers as categoriesReducer } from 'modules/Categories'
import { reducers as productsReducer } from 'modules/Products'
import { reducers as searchReducers } from 'modules/Search'
import { reducers as settingsReducer } from 'modules/Settings'

const rootReducer = combineReducers( {
  ...categoriesReducer,
  ...searchReducers,
  ...settingsReducer,
  ...productsReducer,
} )

export default rootReducer
