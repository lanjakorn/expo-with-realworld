import firebase from 'firebase'
import { eventChannel } from 'redux-saga'
import { take, takeEvery, call, cancel, put, fork } from 'redux-saga/effects'
import { GET_CATEGORIES, INIT_CATEGORIES_SCREEN } from './types'
import { setCategories } from './actions'
import { normalizedCategories } from './normalizr'
import { subscribeEvent } from './subscribeEvent'

function subscribe() {
  return eventChannel( emit => subscribeEvent.subscribe( emit ) )
}

function* read() {
  const channel = yield call( subscribe )
  while ( true ) {
    const action = yield take( channel )
    yield put( action )
  }
}

function* write( context, method, onError, ...params ) {
  try {
    yield call( [ context, method ], ...params )
  } catch ( error ) {
    yield put( onError( error ) )
  }
}

function* watchGetCategories() {
  while ( true ) {
    const { categories } = yield take( GET_CATEGORIES )
    const normalized = yield call( normalizedCategories, categories )
    yield put( setCategories( normalized ) )
  }
}

function* watchInitCategoriesScreen() {
  while ( yield take( INIT_CATEGORIES_SCREEN ) ) {
    subscribeEvent.path = 'categories'
    yield fork( read )
  }
}

export default ( sagas = [
  fork( watchGetCategories ),
  fork( watchInitCategoriesScreen ),
] )
