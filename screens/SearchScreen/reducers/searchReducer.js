import {
  SET_SEARCH_HISTORY,
  SEARCHING,
  CHANGE_SEARCH_TEXT,
} from '../types'

export const INITIAL_STATE = {
  search_history_items: [],
  is_searching: false,
  search_text: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_SEARCH_HISTORY:
    return { ...state, search_history_items: action.search_history_items }
  case SEARCHING:
    return { ...state, is_searching: action.is_searching }
  case CHANGE_SEARCH_TEXT:
    return { ...state, search_text: action.text }
  default:
    return state
  }
}
