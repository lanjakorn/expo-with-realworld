import {
  HOUSE_CATEGORIES_FAILURE,
  HOUSE_CATEGORIES_REQUEST,
  HOUSE_CATEGORIES_SUCCESS,
  SET_HOUSE_CATEGORIES,
  SET_CURRENT_HOUSE_CATEGORY,
} from '../types'

export const INITIAL_STATE = {
  houseCategoriesById: {},
  houseCategoryIds: [],
  houseCategory: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_HOUSE_CATEGORIES:
    return { ...state, ...action.houseCategories }
  case HOUSE_CATEGORIES_REQUEST:
    return { ...state, isFetching: true }
  case HOUSE_CATEGORIES_SUCCESS:
    return { ...state, ...action.houseCategories, isFetching: false }
  case HOUSE_CATEGORIES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_HOUSE_CATEGORY:
    return {
      ...state,
      houseCategory: action.houseCategory,
    }
  default:
    return state
  }
}
