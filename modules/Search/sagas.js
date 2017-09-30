import { take, call, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { GET_SEARCH_HISTORY, SEARCHED } from './types'
import { INITIAL_STATE } from './reducers/searchReducer'
import { storage } from 'services'

const { setSearchHistory } = actions

const watchGetSearchHistoryFormStorage = function* watchGetSearchHistoryFormStorage() {
  while ( yield take( GET_SEARCH_HISTORY ) ) {
    const search_history_items = yield call(
      storage.loadAsyncStorage,
      'search_history_items'
    )

    if ( search_history_items !== null ) {
      yield call(
        storage.saveAsyncStorage,
        'search_history_items',
        search_history_items
      )
      yield put( setSearchHistory( search_history_items ) )
    } else {
      yield call(
        storage.saveAsyncStorage,
        'search_history_items',
        INITIAL_STATE.search_history_items
      )
      yield put( setSearchHistory( INITIAL_STATE.search_history_items ) )
    }
  }
}

const watchSearched = function* watchSearched() {
  while ( true ) {
    const { text } = yield take( SEARCHED )

    const search_history_items = yield call(
      storage.loadAsyncStorage,
      'search_history_items'
    )

    if ( search_history_items !== null ) {
      if ( text !== '' && !search_history_items.includes( text ) ) {
        yield call( storage.saveAsyncStorage, 'search_history_items', [
          ...search_history_items,
          text,
        ] )
        yield put( setSearchHistory( [ ...search_history_items, text ] ) )
      }
    } else {
      yield call(
        storage.saveAsyncStorage,
        'search_history_items',
        INITIAL_STATE.search_history_items
      )
      yield put( setSearchHistory( INITIAL_STATE.search_history_items ) )
    }
  }
}

export default [ fork( watchGetSearchHistoryFormStorage ), fork( watchSearched ) ]
