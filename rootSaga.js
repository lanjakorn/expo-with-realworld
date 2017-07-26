import { all, fork } from 'redux-saga/effects'
import { sagas as searchScreenSagas } from '@screens/SearchScreen/exports'
import { sagas as settingsScreenSagas } from '@screens/SettingsScreen/exports'

export default function* rootSaga() {
  yield all( [
    // searchScreenSagas
    fork( searchScreenSagas.watchGetSearchHistoryFormStorage ),
    fork( searchScreenSagas.watchSearched ),

    // settingsScreenSagas
    fork( settingsScreenSagas.watchChangeAutoComplete ),
    fork( settingsScreenSagas.watchChangeDefaultTab ),
    fork( settingsScreenSagas.watchChangeSaveRecent ),
    fork( settingsScreenSagas.watchGetAutoComplete ),
    fork( settingsScreenSagas.watchGetDefaultTab ),
    fork( settingsScreenSagas.watchGetSaveRecent ),
  ] )
}
