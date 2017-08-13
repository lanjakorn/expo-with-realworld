import { action } from 'utilities'
import {
  FAQS_FAILURE,
  FAQS_REQUEST,
  FAQS_SUCCESS,
  GET_FAQS,
  INIT_FAQS_SCREEN,
  SET_CURRENT_FAQS,
  SET_FAQS,
} from './types'

const getFaqs = faqs => action( GET_FAQS, { faqs } )
const initFaqsScreen = () => action( INIT_FAQS_SCREEN )
const setFaqs = faqs => action( SET_FAQS, { faqs } )
const setCurrentFaqs = ( faqs, startIndex ) =>
  action( SET_CURRENT_FAQS, { faqs, startIndex } )

const faqs = {
  request: () => action( FAQS_REQUEST ),
  success: faqs => action( FAQS_SUCCESS, { faqs } ),
  failure: error => action( FAQS_FAILURE, { error } ),
}

export { faqs, getFaqs, initFaqsScreen, setFaqs }
