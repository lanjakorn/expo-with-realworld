import {
  COMPANY_PROFILE_FAILURE,
  COMPANY_PROFILE_REQUEST,
  COMPANY_PROFILE_SUCCESS,
  SET_COMPANY_PROFILE,
} from '../types'

export const INITIAL_STATE = {
  companyProfile: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_COMPANY_PROFILE:
    return { ...state, ...action.companyProfile }
  case COMPANY_PROFILE_REQUEST:
    return { ...state, isFetching: true }
  case COMPANY_PROFILE_SUCCESS:
    return { ...state, ...action.companyProfile, isFetching: false }
  case COMPANY_PROFILE_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
