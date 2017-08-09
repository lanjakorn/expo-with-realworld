import {
  CATEGORIES_FAILURE,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  SET_CATEGORIES,
  SET_CURRENT_CATEGORIES,
} from '../types'

export const INITIAL_STATE = {
  categoriesById: {},
  categoryIds: [],
  childCatogoriesById: {},
  childCatogoryIds: [],
  subChildCatogoriesById: {},
  subChildCatogoryIds: [],
  categories: [],
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CATEGORIES:
    return { ...state, ...action.categories }
  case CATEGORIES_REQUEST:
    return { ...state, isFetching: true }
  case CATEGORIES_SUCCESS:
    return { ...state, ...action.categories, isFetching: false }
  case CATEGORIES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_CATEGORIES:
    return {
      ...state,
      categories: [
        ...state.categories.slice( 0, action.startIndex ),
        action.categories,
      ],
    }
  default:
    return state
  }
}
