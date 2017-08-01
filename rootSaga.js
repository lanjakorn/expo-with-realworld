import { all } from 'redux-saga/effects'
import { sagas as searchSagas } from 'modules/Search'
import { sagas as settingsSagas } from 'modules/Settings'
import { sagas as categoriesSagas } from 'modules/Categories'

export default function* rootSagas() {
  yield all( [ ...searchSagas, ...settingsSagas, ...categoriesSagas ] )
}
