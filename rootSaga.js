import { all, fork } from 'redux-saga/effects'
import { sagas as searchScreenSagas } from '@screens/SearchScreen/exports'

export default function* rootSaga() {
  yield all( [
    fork( searchScreenSagas.watchLoadSearchHistoryFormStorage ),
    fork( searchScreenSagas.watchSearched ),
  ] )
}
