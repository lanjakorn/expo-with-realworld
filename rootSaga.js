import { all } from 'redux-saga/effects'

import { sagas as authSagas } from 'modules/Auth'
import { sagas as categoriesSagas } from 'modules/ProductCategories'
import { sagas as faqsSagas } from 'modules/Faqs'
import { sagas as homeSagas } from 'modules/Home'
import { sagas as productsSagas } from 'modules/Products'
import { sagas as searchSagas } from 'modules/Search'
import { sagas as settingsSagas } from 'modules/Settings'

const rootSagas = function* rootSagas() {
  yield all( [
    ...authSagas,
    ...categoriesSagas,
    ...faqsSagas,
    ...homeSagas,
    ...productsSagas,
    ...searchSagas,
    ...settingsSagas,
  ] )
}

export default rootSagas
