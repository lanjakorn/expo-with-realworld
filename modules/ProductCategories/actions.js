import { action } from 'utilities'
import {
  CATEGORIES_FAILURE,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  GET_CATEGORIES,
  INIT_CATEGORIES_SCREEN,
  SELECT_CHILD_CATEGORY,
  SET_CATEGORIES,
  SET_CURRENT_CATEGORIES,
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
  categories,
  getCategories,
  initCategoriesScreen,
  selectChildCategory,
  setCategories,
  setCurrentCategories,
}
