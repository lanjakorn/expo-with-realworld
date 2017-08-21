import { eventChannel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import { GET_SOLUTIONS, INIT_SOLUTIONS_SCREEN } from './types'
import { solutions as solutionsAction } from './actions'
import { normalizedSolutions } from './normalize'
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
    const { solutions } = yield take( GET_SOLUTIONS )
    // const houseCategoriesSolutions = yield select(
    //   houseCategoriesSelectors.solutionIdsOfHouseCategorySelectorSelector
    // )
    const normalized = yield call( normalizedSolutions, solutions )
    yield put( solutionsAction.success( normalized ) )
  }
}

function* watchInitSolutionsScreen() {
  while ( yield take( INIT_SOLUTIONS_SCREEN ) ) {
    yield put( solutionsAction.request() )
    subscribeEvent.path = 'solutions'

    yield fork( read )
  }
}

export default [ fork( watchGetSolutions ), fork( watchInitSolutionsScreen ) ]
