import { action } from 'utilities'
import {
  CONTACTS_FAILURE,
  CONTACTS_REQUEST,
  CONTACTS_SUCCESS,
  GET_CONTACTS,
  INIT_CONTACTS_SCREEN,
  SET_CONTACTS,
  SET_CURRENT_CONTACT,
} from './types'

const getContacts = contacts => action( GET_CONTACTS, { contacts } )
const initContactsScreen = () => action( INIT_CONTACTS_SCREEN )
const setContacts = contacts => action( SET_CONTACTS, { contacts } )
const setCurrentContact = ( contact, startIndex ) =>
  action( SET_CURRENT_CONTACT, { contact, startIndex } )

const contacts = {
  request: () => action( CONTACTS_REQUEST ),
  success: contacts => action( CONTACTS_SUCCESS, { contacts } ),
  failure: error => action( CONTACTS_FAILURE, { error } ),
}

export {
  contacts,
  getContacts,
  initContactsScreen,
  setContacts,
  setCurrentContact,
}
