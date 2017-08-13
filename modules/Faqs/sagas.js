import { eventChannel } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { GET_FAQS, INIT_FAQS_SCREEN } from './types'
import { setFaqs, setCurrentFaqs, faqs as faqsAction } from './actions'
import { selectors as productsSelectors } from 'modules/Products'
import { normalizedFaqs } from './normalize'
import { currentFaqsSelector } from './selectors'
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

function* watchGetFaqs() {
  while ( true ) {
    const { faqs: faqsDb } = yield take( GET_FAQS )
    const productFaqs = yield select( productsSelectors.productFaqsSelector )
    const normalized = yield call( normalizedFaqs, faqsDb, productFaqs )

    yield put( faqsAction.success( normalized ) )
  }
}

function* watchInitFaqsScreen() {
  while ( yield take( INIT_FAQS_SCREEN ) ) {
    yield put( faqsAction.request() )
    subscribeEvent.path = 'faqs'

    yield fork( read )
  }
}

export default ( sagas = [ fork( watchGetFaqs ), fork( watchInitFaqsScreen ) ] )
