import {
  SOLUTIONS_FAILURE,
  SOLUTIONS_REQUEST,
  SOLUTIONS_SUCCESS,
  SET_CURRENT_SOLUTION,
  SET_SOLUTIONS,
} from '../types'

export const INITIAL_STATE = {
  solutionsById: {},
  solutionIds: [],
  solution: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_SOLUTIONS:
    return { ...state, ...action.solutions }
  case SOLUTIONS_REQUEST:
    return { ...state, isFetching: true }
  case SOLUTIONS_SUCCESS:
    return { ...state, ...action.solutions, isFetching: false }
  case SOLUTIONS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_SOLUTION:
    return {
      ...state,
      solution: action.solution,
    }
  default:
    return state
  }
}
