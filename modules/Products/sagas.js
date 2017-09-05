import { call, fork, put, select, take } from 'redux-saga/effects'
import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_SOLUTION_CATEGORY,
  INIT_PRODUCTS_SCREEN,
} from './types'
import { products as productsAction } from './actions'
import { selectors } from 'modules/Categories'
import { normalizedProducts } from './normalize'
import { firebaseDb } from 'services/firebase'

function* watchGetProducts() {
  while ( true ) {
    const { products } = yield take( GET_PRODUCTS )
    const normalized = yield call( normalizedProducts, products )
    yield put( productsAction.success( normalized ) )
  }
}

const getProductsByProductCategory = query => {
  return new Promise( resolve => {
    firebaseDb
      .ref( 'products' )
      .orderByChild( 'categories' )
      .startAt( query )
      .endAt( `${ query }\uf8ff` )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )
}

function* watchInitProductsScreen() {
  while ( yield take( INIT_PRODUCTS_SCREEN ) ) {
    const query = yield select( selectors.currentCategorieQuerySelector )
    yield put( productsAction.request() )
    const products = yield call( getProductsByProductCategory, query )
    const normalized = yield call( normalizedProducts, products )
    yield put( productsAction.success( normalized ) )
  }
}

const getProductsBySolutionCategory = solutionCategory => {
  return new Promise( resolve => {
    firebaseDb
      .ref( 'products' )
      .orderByChild( 'solutionCategories' )
      .equalTo( solutionCategory )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )
}

function* watchGetProductsBySolutionCategory() {
  while ( true ) {
    const { solutionCategory } = yield take( GET_PRODUCTS_BY_SOLUTION_CATEGORY )
    yield put( productsAction.request() )
    const products = yield call( getProductsBySolutionCategory, solutionCategory )
    const normalized = yield call( normalizedProducts, products )
    yield put( productsAction.success( normalized ) )
  }
}

export default [
  fork( watchGetProducts ),
  fork( watchInitProductsScreen ),
  fork( watchGetProductsBySolutionCategory ),
]
