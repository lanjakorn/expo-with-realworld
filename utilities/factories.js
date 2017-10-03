import { put, call } from 'redux-saga/effects'
import range from 'lodash/range'
/**
   * @param {[object]}      entity         |
                                             {
                                                "FAILURE": "VIDEOS_FAILURE",
                                                "REQUEST": "VIDEOS_REQUEST",
                                                "SUCCESS": "VIDEOS_SUCCESS"
                                             }
                                           | actions
   * @param  {[func]}       apiFn          | function() | fetch api function
   * @return {[func]}       action         | request(), success() or failure()  | watch callback action then return action
   */
const fetchEntity = function* fetchEntity( entity, apiFn ) {
  yield put( entity.request() )
  const { response, error } = yield call( apiFn )
  if ( response ) {
    yield put( entity.success( response ) )
  } else {
    yield put( entity.failure( error ) )
  }
}

const generate = ( max = 10, item ) => {
  return range( max ).reduce( ( p, c, k ) => ( { ...p, [ `mock${ k }` ]: item } ), {} )
}

export { fetchEntity, generate }
