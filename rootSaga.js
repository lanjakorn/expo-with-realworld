import { all } from 'redux-saga/effects'

import { sagas as caseStudiesSagas } from 'modules/CaseStudies'
import { sagas as categoriesSagas } from 'modules/Categories'
import { sagas as contactsSagas } from 'modules/Contacts'
import { sagas as faqsSagas } from 'modules/Faqs'
import { sagas as houseCategoriesSagas } from 'modules/HouseCategories'
import { sagas as productsSagas } from 'modules/Products'
import { sagas as searchSagas } from 'modules/Search'
import { sagas as settingsSagas } from 'modules/Settings'
import { sagas as solutionCategoriesSagas } from 'modules/SolutionCategories'
import { sagas as solutionsSagas } from 'modules/Solutions'

export default function* rootSagas() {
  yield all( [
    ...caseStudiesSagas,
    ...categoriesSagas,
    ...contactsSagas,
    ...faqsSagas,
    ...houseCategoriesSagas,
    ...productsSagas,
    ...searchSagas,
    ...settingsSagas,
    ...solutionCategoriesSagas,
    ...solutionsSagas,
  ] )
}
