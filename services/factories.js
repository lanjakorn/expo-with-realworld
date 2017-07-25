import { take, put, call } from 'redux-saga/effects'

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
function* fetchEntity( entity, apiFn ) {
  yield put( entity.request() )
  const { response, error } = yield call( apiFn )
  if ( response ) {
    yield put( entity.success( response ) )
  } else {
    yield put( entity.failure( error ) )
  }
}

export { fetchEntity }
