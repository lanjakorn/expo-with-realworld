import { eventChannel } from 'redux-saga'
import { all, call, fork, put, select, take } from 'redux-saga/effects'
import { GET_HOUSE_CATEGORIES, INIT_HOUSE_CATEGORIES_SCREEN } from './types'
import {
  setHouseCategories,
  setCurrentHouseCategories,
  houseCategories as houseCategoriesAction,
} from './actions'

import { normalizedHouseCategories } from './normalize'
import {
  currentHouseCategoriesSelector,
  subChildHouseCategoriesNameSelector,
} from './selectors'
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

function* watchGetHouseCategories() {
  while ( true ) {
    const { houseCategories } = yield take( GET_HOUSE_CATEGORIES )
    const normalized = yield call( normalizedHouseCategories, houseCategories )

    yield put( houseCategoriesAction.success( normalized ) )
  }
}

function* watchInitHouseCategoriesScreen() {
  while ( yield take( INIT_HOUSE_CATEGORIES_SCREEN ) ) {
    yield put( houseCategoriesAction.request() )
    subscribeEvent.path = 'houseCategories'

    yield fork( read )
  }
}

export default ( sagas = [
  fork( watchGetHouseCategories ),
  fork( watchInitHouseCategoriesScreen ),
] )
