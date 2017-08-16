import {
  CONTACTS_FAILURE,
  CONTACTS_REQUEST,
  CONTACTS_SUCCESS,
  SET_CURRENT_SOLUTION,
  SET_CONTACTS,
} from '../types'

export const INITIAL_STATE = {
  contactsById: {},
  contactIds: [],
  contact: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CONTACTS:
    return { ...state, ...action.contacts }
  case CONTACTS_REQUEST:
    return { ...state, isFetching: true }
  case CONTACTS_SUCCESS:
    return { ...state, ...action.contacts, isFetching: false }
  case CONTACTS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_SOLUTION:
    return {
      ...state,
      contact: action.contact,
    }
  default:
    return state
  }
}
