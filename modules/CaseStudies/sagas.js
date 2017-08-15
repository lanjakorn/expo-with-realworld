import { eventChannel } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { GET_CASE_STUDIES, INIT_CASE_STUDIES_SCREEN } from './types'
import { caseStudies as caseStudiesAction } from './actions'
import { selectors as houseCategoriesSelectors } from 'modules/HouseCategories'
import { normalizedCaseStudies } from './normalize'
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

function* watchGetCaseStudies() {
  while ( true ) {
    const { caseStudies: caseStudiesDb } = yield take( GET_CASE_STUDIES )
    const houseCategoriesCaseStudies = yield select(
      houseCategoriesSelectors.houseCategoriesCaseStudiesSelector
    )
    const normalized = yield call(
      normalizedCaseStudies,
      caseStudiesDb,
      houseCategoriesCaseStudies
    )
    yield put( caseStudiesAction.success( normalized ) )
  }
}

function* watchInitCaseStudiesScreen() {
  while ( yield take( INIT_CASE_STUDIES_SCREEN ) ) {
    yield put( caseStudiesAction.request() )
    subscribeEvent.path = 'caseStudies'

    yield fork( read )
  }
}

export default [ fork( watchGetCaseStudies ), fork( watchInitCaseStudiesScreen ) ]
