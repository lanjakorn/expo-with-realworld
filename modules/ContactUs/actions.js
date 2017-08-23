import { action } from 'utilities'
import {
  GET_CONTACT_US,
  INIT_CONTACT_US_SCREEN,
  SET_CURRENT_CONTACT_US,
  SET_CONTACT_US,
  CONTACT_US_FAILURE,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
} from './types'

const getContactUs = contactUs => action( GET_CONTACT_US, { contactUs } )
const initContactUsScreen = () => action( INIT_CONTACT_US_SCREEN )
const setContactUs = contactUs => action( SET_CONTACT_US, { contactUs } )
const setCurrentContactUs = ( contactUs, startIndex ) =>
  action( SET_CURRENT_CONTACT_US, { contactUs, startIndex } )

const contactUs = {
  request: () => action( CONTACT_US_REQUEST ),
  success: contactUs => action( CONTACT_US_SUCCESS, { contactUs } ),
  failure: error => action( CONTACT_US_FAILURE, { error } ),
}

export {
  getContactUs,
  initContactUsScreen,
  setCurrentContactUs,
  setContactUs,
  contactUs,
}
