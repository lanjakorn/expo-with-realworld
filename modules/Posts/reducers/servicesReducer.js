import {
  SERVICES_FAILURE,
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SET_CURRENT_SERVICE,
  SET_SERVICES,
} from '../types'

export const INITIAL_STATE = {
  servicesById: {},
  serviceIds: [],
  service: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_SERVICES:
    return { ...state, ...action.services }
  case SERVICES_REQUEST:
    return { ...state, isFetching: true }
  case SERVICES_SUCCESS:
    return { ...state, ...action.services, isFetching: false }
  case SERVICES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_SERVICE:
    return {
      ...state,
      service: action.service,
    }
  default:
    return state
  }
}
