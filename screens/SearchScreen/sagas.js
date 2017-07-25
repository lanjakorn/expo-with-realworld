import { take, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import { LOAD_SEARCH_SCREEN } from './types'
import { INITIAL_STATE } from './reducers/searchReducer'

const { NAVIGATE } = actions

const loadAsyncStorage = async key => {
  try {
    const serializedState = await AsyncStorage.getItem( key )
    if ( serializedState === null ) {
      return null
    }
    return JSON.parse( serializedState )
  } catch ( err ) {
    return null
  }
}

const saveAsyncStorage = ( key, value ) => {
  try {
    AsyncStorage.setItem( key, value )
  } catch ( err ) {
    // Ignore write errors.
  }
}

const { loadSearchHistoryItems } = actions

function* watchLoadSearchScreen() {
  while ( yield take( LOAD_SEARCH_SCREEN ) ) {
    console.log( 'LOAD_SEARCH_SCREEN' )
    let search_history_items = yield call(
      loadAsyncStorage,
      'search_history_items'
    )
    console.log( 'search_history_items', search_history_items )
    search_history_items = JSON.parse( search_history_items )

    if ( search_history_items !== null ) {
      yield call(
        saveAsyncStorage,
        'search_history_items',
        JSON.stringify( search_history_items )
      )
      // yield put( loadSearchHistoryItems, search_history_items )
    } else {
      yield call(
        saveAsyncStorage,
        'search_history_items',
        JSON.stringify( INITIAL_STATE.search_history_items )
      )
      // yield put( loadSearchHistoryItems, INITIAL_STATE.search_history_items )
    }
  }
}

export { watchLoadSearchScreen }
