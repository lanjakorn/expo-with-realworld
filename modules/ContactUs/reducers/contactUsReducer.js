import {
  CONTACT_US_FAILURE,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  SET_CONTACT_US,
} from '../types'

export const INITIAL_STATE = {
  contactUs: {},
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CONTACT_US:
    return { ...state, ...action.contactUs }
  case CONTACT_US_REQUEST:
    return { ...state, isFetching: true }
  case CONTACT_US_SUCCESS:
    return { ...state, ...action.contactUs, isFetching: false }
  case CONTACT_US_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
