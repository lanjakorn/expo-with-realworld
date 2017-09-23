import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types'

export const INITIAL_STATE = {
  profile: { id: 'test-ricoh', email: 'test@ricoh.com' },
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case LOGIN_REQUEST:
    return { ...state, isFetching: true }
  case LOGIN_SUCCESS:
    return { ...state, ...action.Login, isFetching: false }
  case LOGIN_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  default:
    return state
  }
}
