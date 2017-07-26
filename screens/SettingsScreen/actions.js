import { action } from 'utilities'
import { AsyncStorage } from 'react-native'

import {
  CHANGE_AUTOCOMPLETE,
  CHANGE_DEFAULT_TAB,
  CHANGE_SAVE_RECENT,
  GET_AUTOCOMPLETE,
  GET_DEFAULT_TAB,
  GET_SAVE_RECENT,
  SET_AUTOCOMPLETE,
  SET_DEFAULT_TAB,
  SET_SAVE_RECENT,
} from './types'

const getDefaultTab = () => action( GET_DEFAULT_TAB )
const setDefaultTab = tab => action( SET_DEFAULT_TAB, { tab } )
const changeDefaultTab = tab => action( CHANGE_DEFAULT_TAB, { tab } )

const getAutoComplete = () => action( GET_AUTOCOMPLETE )
const setAutoComplete = autocomplete =>
  action( SET_AUTOCOMPLETE, { autocomplete } )
const changeAutoComplete = autocomplete =>
  action( CHANGE_AUTOCOMPLETE, { autocomplete } )

const getSaveRecent = () => action( GET_SAVE_RECENT )
const setSaveRecent = recent => action( SET_SAVE_RECENT, { recent } )
const changeSaveRecent = recent => action( CHANGE_SAVE_RECENT, { recent } )

export {
  changeAutoComplete,
  changeDefaultTab,
  changeSaveRecent,
  getAutoComplete,
  getDefaultTab,
  getSaveRecent,
  setAutoComplete,
  setDefaultTab,
  setSaveRecent,
}
