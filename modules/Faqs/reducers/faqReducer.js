import {
  FAQS_FAILURE,
  FAQS_REQUEST,
  FAQS_SUCCESS,
  SET_CURRENT_FAQS,
  SET_FAQS,
} from '../types'

export const INITIAL_STATE = {
  faqsById: {},
  faqIds: [],
  faq: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_FAQS:
    return { ...state, ...action.faqs }
  case FAQS_REQUEST:
    return { ...state, isFetching: true }
  case FAQS_SUCCESS:
    return { ...state, ...action.faqs, isFetching: false }
  case FAQS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_FAQS:
    return {
      ...state,
      faq: action.faqs,
    }
  default:
    return state
  }
}
