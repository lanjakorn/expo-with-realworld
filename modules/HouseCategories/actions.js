import { action } from 'utilities'
import {
  HOUSE_CATEGORIES_FAILURE,
  GET_HOUSE_CATEGORIES,
  HOUSE_CATEGORIES_REQUEST,
  HOUSE_CATEGORIES_SUCCESS,
  INIT_HOUSE_CATEGORIES_SCREEN,
  SET_CURRENT_HOUSE_CATEGORY,
  SET_HOUSE_CATEGORIES,
} from './types'

const getHouseCategories = houseCategories =>
  action( GET_HOUSE_CATEGORIES, { houseCategories } )
const initHouseCategoriesScreen = () => action( INIT_HOUSE_CATEGORIES_SCREEN )
const setHouseCategories = houseCategories =>
  action( SET_HOUSE_CATEGORIES, { houseCategories } )
const setCurrentHouseCategory = houseCategory =>
  action( SET_CURRENT_HOUSE_CATEGORY, { houseCategory } )

const houseCategories = {
  request: () => action( HOUSE_CATEGORIES_REQUEST ),
  success: houseCategories =>
    action( HOUSE_CATEGORIES_SUCCESS, { houseCategories } ),
  failure: error => action( HOUSE_CATEGORIES_FAILURE, { error } ),
}

export {
  getHouseCategories,
  houseCategories,
  initHouseCategoriesScreen,
  setCurrentHouseCategory,
  setHouseCategories,
}
