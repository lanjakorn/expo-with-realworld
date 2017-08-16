import {
  SOLUTION_CATEGORIES_FAILURE,
  SOLUTION_CATEGORIES_REQUEST,
  SOLUTION_CATEGORIES_SUCCESS,
  SET_CURRENT_SOLUTION_CATEGORY,
  SET_SOLUTION_CATEGORIES,
} from '../types'

export const INITIAL_STATE = {
  solutionCategoriesById: {},
  solutionCategoryIds: [],
  solutionCategory: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_SOLUTION_CATEGORIES:
    return { ...state, ...action.solutionCategories }
  case SOLUTION_CATEGORIES_REQUEST:
    return { ...state, isFetching: true }
  case SOLUTION_CATEGORIES_SUCCESS:
    return { ...state, ...action.solutionCategories, isFetching: false }
  case SOLUTION_CATEGORIES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_SOLUTION_CATEGORY:
    return {
      ...state,
      solutionCategory: action.solutionCategory,
    }
  default:
    return state
  }
}
