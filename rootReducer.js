import { combineReducers } from 'redux'

import { reducers as caseStudiesReducer } from 'modules/CaseStudies'
import { reducers as categoriesReducer } from 'modules/Categories'
import { reducers as contactsReducer } from 'modules/Contacts'
import { reducers as contactUsReducer } from 'modules/ContactUs'
import { reducers as faqsReducer } from 'modules/Faqs'
import { reducers as houseCategoriesReducer } from 'modules/HouseCategories'
import { reducers as productsReducer } from 'modules/Products'
import { reducers as searchReducers } from 'modules/Search'
import { reducers as settingsReducer } from 'modules/Settings'
import { reducers as solutionCategoriesReducer } from 'modules/SolutionCategories'
import { reducers as solutionsReducer } from 'modules/Solutions'
import { reducers as servicesReducer } from 'modules/Services'

const rootReducer = combineReducers( {
  ...caseStudiesReducer,
  ...categoriesReducer,
  ...contactsReducer,
  ...contactUsReducer,
  ...faqsReducer,
  ...houseCategoriesReducer,
  ...productsReducer,
  ...searchReducers,
  ...settingsReducer,
  ...solutionCategoriesReducer,
  ...solutionsReducer,
  ...servicesReducer,
} )

export default rootReducer
