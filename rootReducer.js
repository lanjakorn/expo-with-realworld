import config from 'config'

import { MainNavigator } from 'navigation'

import { combineReducers } from 'redux'

import { reducers as authReducer } from 'modules/Auth'
import { reducers as caseStudiesReducer } from 'modules/CaseStudies'
import { reducers as companyProfileReducer } from 'modules/CompanyProfile'
import { reducers as contactsReducer } from 'modules/Contacts'
import { reducers as contactUsReducer } from 'modules/ContactUs'
import { reducers as faqsReducer } from 'modules/Faqs'
import { reducers as HomeReducer } from 'modules/Home'
import { reducers as houseCategoriesReducer } from 'modules/HouseCategories'
import { reducers as productCategoriesReducer } from 'modules/ProductCategories'
import { reducers as productsReducer } from 'modules/Products'
import { reducers as searchReducers } from 'modules/Search'
import { reducers as servicesReducer } from 'modules/Services'
import { reducers as settingsReducer } from 'modules/Settings'
import { reducers as solutionCategoriesReducer } from 'modules/SolutionCategories'
import { reducers as solutionsReducer } from 'modules/Solutions'

import { nav } from 'utilities'
import { ga } from 'services'

const tracker = new ga.Tracker( config.ga, config.app.name, config.app.version )

const initialState = MainNavigator.Nav.router.getStateForAction(
  MainNavigator.Nav.router.getActionForPathAndParams(
    config.app.initialRouteName
  )
)

const navReducer = ( state = initialState, action ) => {
  const nextState = MainNavigator.Nav.router.getStateForAction( action, state )

  const currentScreen = nav.getCurrentRouteName( nextState )
  const prevScreen = nav.getCurrentRouteName( state )

  if ( prevScreen !== currentScreen ) {
    tracker.trackScreenView( currentScreen )
  }

  return nextState || state
}

const rootReducer = combineReducers( {
  ...authReducer,
  ...caseStudiesReducer,
  ...companyProfileReducer,
  ...contactsReducer,
  ...contactUsReducer,
  ...faqsReducer,
  ...HomeReducer,
  ...houseCategoriesReducer,
  ...productCategoriesReducer,
  ...productsReducer,
  ...searchReducers,
  ...servicesReducer,
  ...settingsReducer,
  ...solutionCategoriesReducer,
  ...solutionsReducer,
  nav: navReducer,
} )

export default rootReducer
