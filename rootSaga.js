import { fork } from 'redux-saga/effects'
import { watchLoadSearchScreen } from '@screens/SearchScreen/sagas'

export default function* rootSaga() {
  yield [ fork( watchLoadSearchScreen ) ]
}
