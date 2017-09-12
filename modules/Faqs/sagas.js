import { call, fork, put, take } from 'redux-saga/effects'
import {
  ADD_FAQ,
  GET_FAQS_BY_PRODUCT,
  GET_FAQS_BY_SOLUTION_CATEGORY,
} from './types'
import {
  normalize as faqsNormalized,
  actions as faqsAction,
} from 'modules/Faqs'
import { firebaseDb } from 'services/firebase'

const getFaqsByProduct = productId => {
  return new Promise( resolve => {
    firebaseDb
      .ref( 'faqs' )
      .orderByChild( 'productId' )
      .equalTo( productId )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )
}

const getFaqsBySolutionCategory = solutionCategoryId => {
  return new Promise( resolve => {
    firebaseDb
      .ref( 'faqs' )
      .orderByChild( 'solutionCategoryId' )
      .equalTo( solutionCategoryId )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )
}

const addFaq = faq => {
  return new Promise( resolve => {
    firebaseDb.ref( 'faqs' ).push().set( faq, error => {
      if ( error ) {
      } else {
        resolve( true )
      }
    } )
  } )
}

function* watchGetFaqsByProduct() {
  while ( true ) {
    const { productId } = yield take( GET_FAQS_BY_PRODUCT )
    yield put( faqsAction.faqs.request() )
    const faqs = yield call( getFaqsByProduct, productId )
    const normalizedFaqs = yield call( faqsNormalized.normalizedFaqs, faqs )
    yield put( faqsAction.faqs.success( normalizedFaqs ) )
  }
}

function* watchGetFaqsBySolutionCategory() {
  while ( true ) {
    const { solutionCategoryId } = yield take( GET_FAQS_BY_SOLUTION_CATEGORY )
    yield put( faqsAction.faqs.request() )
    const faqs = yield call( getFaqsBySolutionCategory, solutionCategoryId )
    const normalizedFaqs = yield call( faqsNormalized.normalizedFaqs, faqs )
    yield put( faqsAction.faqs.success( normalizedFaqs ) )
  }
}

function* watchAddFaq() {
  while ( true ) {
    const { faq } = yield take( ADD_FAQ )
    console.log( 'payload', faq )
    yield put( faqsAction.addFaqApi.request() )
    const saved = yield call( addFaq, faq )
    console.log( saved )
    yield put( faqsAction.addFaqApi.success( saved ) )
  }
}

export default [
  fork( watchAddFaq ),
  fork( watchGetFaqsByProduct ),
  fork( watchGetFaqsBySolutionCategory ),
]
