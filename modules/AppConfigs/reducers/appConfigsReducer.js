import {
  APP_CONFIGS_FAILURE,
  APP_CONFIGS_REQUEST,
  APP_CONFIGS_SUCCESS,
} from '../types'

export const INITIAL_STATE = {
  configs: {},
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case APP_CONFIGS_REQUEST:
    return { ...state, isFetching: true }
  case APP_CONFIGS_SUCCESS:
    return { ...state, configs: { ...action.appConfigs }, isFetching: false }
  case APP_CONFIGS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
