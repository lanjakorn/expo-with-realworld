import {
  NEWSLETTERS_FAILURE,
  NEWSLETTERS_REQUEST,
  NEWSLETTERS_SUCCESS,
  SET_CURRENT_NEWSLETTER,
} from '../types'

export const INITIAL_STATE = {
  newslettersById: {},
  newslettersIds: [],
  newsletter: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case NEWSLETTERS_REQUEST:
    return { ...state, isFetching: true }
  case NEWSLETTERS_SUCCESS:
    return { ...state, ...action.newsletters, isFetching: false }
  case NEWSLETTERS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_NEWSLETTER:
    return {
      ...state,
      newsletter: action.newsletter,
    }
  default:
    return state
  }
}
