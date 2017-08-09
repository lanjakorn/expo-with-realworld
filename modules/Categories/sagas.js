import { eventChannel } from 'redux-saga'
import { all, call, fork, put, select, take } from 'redux-saga/effects'
import {
  GET_CATEGORIES,
  INIT_CATEGORIES_SCREEN,
  SELECT_CHILD_CATEGORY,
} from './types'
import {
  setCategories,
  setCurrentCategories,
  categories as categoriesAction,
} from './actions'

import { normalizedCategories } from './normalize'
import {
  currentCategoriesSelector,
  subChildCategoriesNameSelector,
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

function* watchGetCategories() {
  while ( true ) {
    const { categories } = yield take( GET_CATEGORIES )
    const normalized = yield call( normalizedCategories, categories )
    yield put( categoriesAction.success( normalized ) )
  }
}

function* watchSelectChildCategory() {
  while ( true ) {
    const { childCategory, navigation } = yield take( SELECT_CHILD_CATEGORY )
    yield put( setCurrentCategories( childCategory, 1 ) )
    const [ currentCategories, subChildCategories ] = yield all( [
      select( currentCategoriesSelector ),
      select( subChildCategoriesNameSelector ),
    ] )

    if ( subChildCategories.length === 0 ) {
      navigation.navigate( 'products' )
    } else {
      navigation.navigate( 'subChildCategories', currentCategories[ 1 ] )
    }
  }
}

function* watchInitCategoriesScreen() {
  while ( yield take( INIT_CATEGORIES_SCREEN ) ) {
    yield put( categoriesAction.request() )

    subscribeEvent.path = 'categories'
    yield fork( read )
  }
}

export default ( sagas = [
  fork( watchGetCategories ),
  fork( watchInitCategoriesScreen ),
  fork( watchSelectChildCategory ),
] )
