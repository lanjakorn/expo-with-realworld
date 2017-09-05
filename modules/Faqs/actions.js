import { action } from 'utilities'
import {
  FAQS_FAILURE,
  FAQS_REQUEST,
  FAQS_SUCCESS,
  GET_FAQS,
  GET_FAQS_BY_PRODUCT,
  GET_FAQS_BY_SOLUTION_CATEGORY,
  INIT_FAQS_SCREEN,
  SET_CURRENT_FAQS,
  SET_CURRENT_FAQ_IDS_OF_PRODUCT_CATEGORY,
  SET_CURRENT_FAQ_IDS_OF_SOLUTION_CATEGORY,
  SET_FAQS,
} from './types'

const getFaqs = faqs => action( GET_FAQS, { faqs } )
const getFaqsByProduct = productId => action( GET_FAQS_BY_PRODUCT, { productId } )
const getFaqsBySolutionCategory = solutionCategoryId =>
  action( GET_FAQS_BY_SOLUTION_CATEGORY, { solutionCategoryId } )

const initFaqsScreen = () => action( INIT_FAQS_SCREEN )
const setFaqs = faqs => action( SET_FAQS, { faqs } )
const setCurrentFaqs = ( faqs, startIndex ) =>
  action( SET_CURRENT_FAQS, { faqs, startIndex } )

const setCurrentFaqIdsOfProductCategory = id =>
  action( SET_CURRENT_FAQ_IDS_OF_PRODUCT_CATEGORY, { id } )
const setCurrentFaqIdsOfSolutionCategory = id =>
  action( SET_CURRENT_FAQ_IDS_OF_SOLUTION_CATEGORY, { id } )

const faqs = {
  request: () => action( FAQS_REQUEST ),
  success: faqs => action( FAQS_SUCCESS, { faqs } ),
  failure: error => action( FAQS_FAILURE, { error } ),
}

export {
  faqs,
  getFaqs,
  getFaqsByProduct,
  getFaqsBySolutionCategory,
  initFaqsScreen,
  setCurrentFaqIdsOfProductCategory,
  setCurrentFaqIdsOfSolutionCategory,
  setCurrentFaqs,
  setFaqs,
}
