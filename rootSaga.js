import { all } from 'redux-saga/effects'
import { sagas as searchScreenSagas } from '@screens/SearchScreen/exports'
import { sagas as settingsScreenSagas } from '@screens/SettingsScreen/exports'

export default function* rootSagas() {
  yield all( [ ...searchScreenSagas, ...settingsScreenSagas ] )
}
