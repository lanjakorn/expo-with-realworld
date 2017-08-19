import { eventChannel } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import {
  GET_SOLUTION_CATEGORIES,
  INIT_SOLUTION_CATEGORIES_SCREEN,
} from './types'
import { solutionCategories as solutionCategoriesAction } from './actions'
import { selectors as solutionsSelectors } from 'modules/Solutions'
import { normalizedSolutionCategories } from './normalize'
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

function* watchGetSolutions() {
  while ( true ) {
    const { solutionCategories } = yield take( GET_SOLUTION_CATEGORIES )
    // const solutionCategoriesOfSolutions = yield select(
    //   solutionsSelectors.solutionCategoriesOfSolutionsSelector
    // )
    const normalized = yield call(
      normalizedSolutionCategories,
      solutionCategories
    )
    yield put( solutionCategoriesAction.success( normalized ) )
  }
}

function* watchInitSolutionsScreen() {
  while ( yield take( INIT_SOLUTION_CATEGORIES_SCREEN ) ) {
    yield put( solutionCategoriesAction.request() )
    subscribeEvent.path = 'solutionCategories'

    yield fork( read )
  }
}

export default [ fork( watchGetSolutions ), fork( watchInitSolutionsScreen ) ]
