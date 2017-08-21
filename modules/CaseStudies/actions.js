import { action } from 'utilities'
import {
  CASE_STUDIES_FAILURE,
  CASE_STUDIES_REQUEST,
  CASE_STUDIES_SUCCESS,
  GET_CASE_STUDIES,
  INIT_CASE_STUDIES_SCREEN,
  SET_CASE_STUDIES,
  SET_CURRENT_CASE_STUDY,
} from './types'

const getCaseStudies = caseStudies => action( GET_CASE_STUDIES, { caseStudies } )
const initCaseStudiesScreen = () => action( INIT_CASE_STUDIES_SCREEN )
const setCaseStudies = caseStudies => action( SET_CASE_STUDIES, { caseStudies } )
const setCurrentCaseStudy = ( caseStudy, startIndex ) =>
  action( SET_CURRENT_CASE_STUDY, { caseStudy, startIndex } )

const caseStudies = {
  request: () => action( CASE_STUDIES_REQUEST ),
  success: caseStudies => action( CASE_STUDIES_SUCCESS, { caseStudies } ),
  failure: error => action( CASE_STUDIES_FAILURE, { error } ),
}

export {
  caseStudies,
  getCaseStudies,
  initCaseStudiesScreen,
  setCaseStudies,
  setCurrentCaseStudy,
}
