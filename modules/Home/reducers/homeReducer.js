import { HOME_FAILURE, HOME_REQUEST, HOME_SUCCESS } from '../types'

export const INITIAL_STATE = {
  isFetching: false,
  isReady: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case HOME_REQUEST:
    return { ...state, isFetching: true }
  case HOME_SUCCESS:
    return { ...state, isFetching: false, isReady: true }
  case HOME_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
