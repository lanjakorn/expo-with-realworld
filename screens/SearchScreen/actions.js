import {
  CHANGE_SEARCH_TEXT,
  GET_SEARCH_HISTORY,
  SEARCHED,
  SEARCHING,
  SET_SEARCH_HISTORY,
} from './types'

const action = ( type, payload = {} ) => ( { type, ...payload } )

const changeSearchText = text => action( CHANGE_SEARCH_TEXT, { text } )
const getSearchHistory = () => action( GET_SEARCH_HISTORY )
const setSearchHistory = search_history_items =>
  action( SET_SEARCH_HISTORY, { search_history_items } )
const searched = text => action( SEARCHED, { text } )
const searching = is_searching => action( SEARCHING, { is_searching } )

export {
  changeSearchText,
  getSearchHistory,
  searched,
  searching,
  setSearchHistory,
}
