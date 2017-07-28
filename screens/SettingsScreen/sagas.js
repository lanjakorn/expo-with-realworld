import { take, call, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import {
  CHANGE_AUTOCOMPLETE,
  CHANGE_DEFAULT_TAB,
  CHANGE_SAVE_RECENT,
  GET_AUTOCOMPLETE,
  GET_DEFAULT_TAB,
  GET_SAVE_RECENT,
} from './types'
import { INITIAL_STATE } from './reducers/settingsReducer'
import { storage } from 'services'

const {
  changeAutoComplete,
  changeDefaultTab,
  changeSaveRecent,
  setAutoComplete,
  setDefaultTab,
  setSaveRecent,
} = actions

function* watchGetDefaultTab() {
  while ( yield take( GET_DEFAULT_TAB ) ) {
    const defaulttab_value = yield call(
      storage.loadAsyncStorage,
      'default_tab_value'
    )
    if ( defaulttab_value !== null ) {
      yield put( changeDefaultTab( defaulttab_value ) )
    } else {
      yield call(
        storage.saveAsyncStorage,
        'default_tab_value',
        INITIAL_STATE.default_tab
      )
    }
  }
}

function* watchChangeDefaultTab() {
  while ( true ) {
    const { tab } = yield take( CHANGE_DEFAULT_TAB )
    yield call( storage.saveAsyncStorage, 'default_tab_value', tab )
    yield put( setDefaultTab( tab ) )
  }
}

function* watchGetAutoComplete() {
  while ( yield take( GET_AUTOCOMPLETE ) ) {
    const autocomplete_value = yield call(
      storage.loadAsyncStorage,
      'autocomplete_value'
    )
    if ( autocomplete_value !== null ) {
      yield put( changeAutoComplete( autocomplete_value ) )
    } else {
      yield call(
        storage.saveAsyncStorage,
        'autocomplete_value',
        INITIAL_STATE.autocomplete
      )
    }
  }
}

function* watchChangeAutoComplete() {
  while ( true ) {
    const { autocomplete } = yield take( CHANGE_AUTOCOMPLETE )
    yield call( storage.saveAsyncStorage, 'autocomplete_value', autocomplete )
    yield put( setAutoComplete( autocomplete ) )
  }
}

function* watchGetSaveRecent() {
  while ( yield take( GET_SAVE_RECENT ) ) {
    const save_recent_value = yield call(
      storage.loadAsyncStorage,
      'save_recent_value'
    )
    if ( save_recent_value !== null ) {
      yield put( changeSaveRecent( save_recent_value ) )
    } else {
      yield call(
        storage.saveAsyncStorage,
        'save_recent_value',
        INITIAL_STATE.save_recent
      )
    }
  }
}

function* watchChangeSaveRecent() {
  while ( true ) {
    const { recent } = yield take( CHANGE_SAVE_RECENT )
    yield call( storage.saveAsyncStorage, 'save_recent_value', recent )
    console.log( recent )
    yield put( setSaveRecent( recent ) )
  }
}

export default ( sagas = [
  fork( watchChangeAutoComplete ),
  fork( watchChangeDefaultTab ),
  fork( watchChangeSaveRecent ),
  fork( watchGetAutoComplete ),
  fork( watchGetDefaultTab ),
  fork( watchGetSaveRecent ),
] )
