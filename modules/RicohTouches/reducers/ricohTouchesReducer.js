import {
  RICOH_TOUCHES_FAILURE,
  RICOH_TOUCHES_REQUEST,
  RICOH_TOUCHES_SUCCESS,
} from '../types'

export const INITIAL_STATE = {
  ricohTouchesById: {},
  ricohTouchesIds: [],
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case RICOH_TOUCHES_REQUEST:
    return { ...state, isFetching: true }
  case RICOH_TOUCHES_SUCCESS:
    return { ...state, ...action.ricohTouches, isFetching: false }
  case RICOH_TOUCHES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
