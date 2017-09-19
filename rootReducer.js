import { combineReducers } from 'redux'

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

const rootReducer = combineReducers( {
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
} )

export default rootReducer
