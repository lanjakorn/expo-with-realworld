import { action } from 'utilities'
import {
  HOUSE_CATEGORIES_FAILURE,
  HOUSE_CATEGORIES_REQUEST,
  HOUSE_CATEGORIES_SUCCESS,
  GET_HOUSE_CATEGORIES,
  INIT_HOUSE_CATEGORIES_SCREEN,
  SET_HOUSE_CATEGORIES,
  SET_CURRENT_HOUSE_CATEGORIES,
} from './types'

const getHouseCategories = houseCategories =>
  action( GET_HOUSE_CATEGORIES, { houseCategories } )
const initHouseCategoriesScreen = () => action( INIT_HOUSE_CATEGORIES_SCREEN )
const setHouseCategories = houseCategories =>
  action( SET_HOUSE_CATEGORIES, { houseCategories } )
const setCurrentHouseCategories = houseCategories =>
  action( SET_CURRENT_HOUSE_CATEGORIES, { houseCategories } )

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
  setCurrentHouseCategories,
  setHouseCategories,
}
