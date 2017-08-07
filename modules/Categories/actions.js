import { action } from 'utilities'
import {
  GET_CATEGORIES,
  INIT_CATEGORIES_SCREEN,
  SET_CATEGORIES,
  SET_CURRENT_CATEGORIES,
  SELECT_CHILD_CATEGORY,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
} from './types'

const getCategories = categories => action( GET_CATEGORIES, { categories } )
const initCategoriesScreen = () => action( INIT_CATEGORIES_SCREEN )
const setCategories = categories => action( SET_CATEGORIES, { categories } )
const setCurrentCategories = ( categories, startIndex ) =>
  action( SET_CURRENT_CATEGORIES, { categories, startIndex } )
const selectChildCategory = ( childCategory, navigation ) =>
  action( SELECT_CHILD_CATEGORY, { childCategory, navigation } )

const categories = {
  request: () => action( CATEGORIES_REQUEST ),
  success: categories => action( CATEGORIES_SUCCESS, { categories } ),
  failure: error => action( CATEGORIES_FAILURE, { error } ),
}

export {
  getCategories,
  initCategoriesScreen,
  setCategories,
  setCurrentCategories,
  selectChildCategory,
  categories,
}
