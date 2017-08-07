import { SET_AUTOCOMPLETE, SET_SAVE_RECENT, SET_DEFAULT_TAB } from '../types'

export const INITIAL_STATE = {
  autocomplete: false,
  save_recent: false,
  default_tab: 'Stories (Default)',
  lang: 'th',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_AUTOCOMPLETE:
    return { ...state, autocomplete: action.autocomplete }
  case SET_SAVE_RECENT:
    return { ...state, save_recent: action.recent }
  case SET_DEFAULT_TAB:
    return { ...state, default_tab: action.tab }
  default:
    return state
  }
}
