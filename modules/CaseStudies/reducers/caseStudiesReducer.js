import {
  CASE_STUDIES_FAILURE,
  CASE_STUDIES_REQUEST,
  CASE_STUDIES_SUCCESS,
  SET_CURRENT_CASE_STUDY,
  SET_CASE_STUDIES,
} from '../types'

export const INITIAL_STATE = {
  caseStudiesById: {},
  caseStudyIds: [],
  caseStudy: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CASE_STUDIES:
    return { ...state, ...action.caseStudies }
  case CASE_STUDIES_REQUEST:
    return { ...state, isFetching: true }
  case CASE_STUDIES_SUCCESS:
    return { ...state, ...action.caseStudies, isFetching: false }
  case CASE_STUDIES_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
  case SET_CURRENT_CASE_STUDY:
    return {
      ...state,
      caseStudy: action.caseStudy,
    }
  default:
    return state
  }
}
