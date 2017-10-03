import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types'

export const INITIAL_STATE = {
  profile: { email: '', isValidEmail: false, token: '', uid: '' },
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case LOGIN_REQUEST:
    return { ...state, isFetching: true }
  case LOGIN_SUCCESS:
    return {
      ...state,
      profile: { ...state.profile, ...action.profile },
      isFetching: false,
    }
  case LOGIN_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
