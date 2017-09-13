import {
  ADD_FAQ_FAILURE,
  ADD_FAQ_REQUEST,
  ADD_FAQ_SUCCESS,
  FAQS_FAILURE,
  FAQS_REQUEST,
  FAQS_SUCCESS,
  SET_CURRENT_FAQS,
  SET_CURRENT_FAQ_IDS_OF_PRODUCT_CATEGORY,
  SET_CURRENT_FAQ_IDS_OF_SOLUTION_CATEGORY,
  SET_FAQS,
} from '../types'

export const INITIAL_STATE = {
  faqsById: {},
  faqIds: [],
  faqs: '',
  faqIdsOfProductCategory: [],
  faqIdsOfSolutionCategory: [],
  isFetching: false,
  isAddFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_FAQS:
    return { ...state, ...action.faqs }
  case ADD_FAQ_REQUEST:
    return { ...state, isAddFetching: true }
  case ADD_FAQ_SUCCESS:
    return {
      ...state,
      isAddFetching: false,
    }
  case ADD_FAQ_FAILURE:
    return { ...state, isAddFetching: false, errorMessage: action.error }
  case FAQS_REQUEST:
    return { ...state, isFetching: true }
  case FAQS_SUCCESS:
    return {
      ...state,
      faqsById: {
        ...state.faqsById,
        ...action.faqs.faqsById,
      },
      faqIds: [
        ...state.faqIds,
        ...action.faqs.faqIds.reduce(
          ( p, c ) =>
            state.faqIds.some( oldItem => oldItem === c ) ? p : [ ...p, c ],
          []
        ),
      ],
      isFetching: false,
    }
  case FAQS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_FAQ_IDS_OF_PRODUCT_CATEGORY:
    return { ...state, faqIdsOfProductCategory: action.id }
  case SET_CURRENT_FAQ_IDS_OF_SOLUTION_CATEGORY:
    return { ...state, faqIdsOfSolutionCategory: action.id }
  case SET_CURRENT_FAQS:
    return {
      ...state,
      faqs: action.faqs,
    }
  default:
    return state
  }
}
