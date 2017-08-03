import firebase from 'firebase'
import { eventChannel } from 'redux-saga'
import {
  take,
  takeEvery,
  call,
  cancel,
  put,
  fork,
  select,
} from 'redux-saga/effects'
import { GET_PRODUCTS, INIT_PRODUCTS_SCREEN } from './types'
import { setProducts } from './actions'
import { selectors } from 'modules/Categories'
import { normalizedProducts } from './normalize'
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

function* watchGetProducts() {
  while ( true ) {
    const { products } = yield take( GET_PRODUCTS )
    const normalized = yield call( normalizedProducts, products )
    yield put( setProducts( normalized ) )
  }
}

function* watchInitProductsScreen() {
  while ( yield take( INIT_PRODUCTS_SCREEN ) ) {
    const query = yield select( selectors.currentCategorieQuerySelector )

    subscribeEvent.path = 'products'
    subscribeEvent.orderBy = 'categories'
    subscribeEvent.query = query
    yield fork( read )
  }
}

export default ( sagas = [ fork( watchGetProducts ), fork( watchInitProductsScreen ) ] )
