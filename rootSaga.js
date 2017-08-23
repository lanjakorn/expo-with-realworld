import { all } from 'redux-saga/effects'

import { sagas as homeSagas } from 'modules/Home'
import { sagas as categoriesSagas } from 'modules/Categories'
// import { sagas as faqsSagas } from 'modules/Faqs'
import { sagas as productsSagas } from 'modules/Products'
import { sagas as searchSagas } from 'modules/Search'
import { sagas as settingsSagas } from 'modules/Settings'

export default function* rootSagas() {
  yield all( [
    ...homeSagas,
    ...categoriesSagas,
    // ...faqsSagas,
    ...productsSagas,
    ...searchSagas,
    ...settingsSagas,
  ] )
}
