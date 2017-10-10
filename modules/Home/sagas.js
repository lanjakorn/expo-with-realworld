import { all, call, fork, put, take } from 'redux-saga/effects'
import { INIT_HOME_SCREEN } from './types'
import { home as homeAction } from './actions'
import { getFireBaseByRef } from './api'

import { actions as appConfigsAction } from 'modules/AppConfigs'

import {
  normalize as ricohTouchesNormalized,
  actions as ricohTouchesAction,
} from 'modules/RicohTouches'

import {
  normalize as caseStudiesNormalized,
  actions as caseStudiesAction,
} from 'modules/CaseStudies'

import {
  normalize as categoriesNormalized,
  actions as categoriesAction,
} from 'modules/ProductCategories'

import {
  normalize as contactsNormalized,
  actions as contactsAction,
} from 'modules/Contacts'

import { actions as companyProfileAction } from 'modules/CompanyProfile'

import { actions as contactUsAction } from 'modules/ContactUs'

import {
  normalize as houseCategoriesNormalized,
  actions as houseCategoriesAction,
} from 'modules/HouseCategories'

import {
  normalize as servicesNormalized,
  actions as servicesAction,
} from 'modules/Services'

import {
  normalize as solutionCategoriesNormalized,
  actions as solutionCategoriesAction,
} from 'modules/SolutionCategories'

import {
  normalize as solutionsNormalized,
  actions as solutionsAction,
} from 'modules/Solutions'

const getAppConfigs = function* getAppConfigs() {
  yield put( appConfigsAction.appConfigs.request() )
  const appConfigs = yield call( getFireBaseByRef, 'appConfigs' )
  yield put( appConfigsAction.appConfigs.success( appConfigs ) )
}

const getRicohTouches = function* getRicohTouches() {
  yield put( ricohTouchesAction.ricohTouches.request() )
  const ricohTouches = yield call( getFireBaseByRef, 'ricohTouches' )
  const normalizedCategories = yield call(
    ricohTouchesNormalized.normalizedRicohTouches,
    ricohTouches
  )
  yield put( ricohTouchesAction.ricohTouches.success( normalizedCategories ) )
}

const getCaseStudies = function* getCaseStudies() {
  yield put( caseStudiesAction.caseStudies.request() )
  const caseStudies = yield call( getFireBaseByRef, 'caseStudies' )
  const normalizedCaseStudies = yield call(
    caseStudiesNormalized.normalizedCaseStudies,
    caseStudies
  )
  yield put( caseStudiesAction.caseStudies.success( normalizedCaseStudies ) )
}

const getCategories = function* getCategories() {
  yield put( categoriesAction.categories.request() )
  const categories = yield call( getFireBaseByRef, 'categories' )
  const normalizedCategories = yield call(
    categoriesNormalized.normalizedCategories,
    categories
  )
  yield put( categoriesAction.categories.success( normalizedCategories ) )
}

const getContacts = function* getContacts() {
  yield put( contactsAction.contacts.request() )
  const contacts = yield call( getFireBaseByRef, 'contacts' )
  const normalizedContacts = yield call(
    contactsNormalized.normalizedContacts,
    contacts
  )
  yield put( contactsAction.contacts.success( normalizedContacts ) )
}

const getContactUs = function* getContactUs() {
  yield put( contactsAction.contacts.request() )
  const contactUs = yield call( getFireBaseByRef, 'contactUs' )
  yield put( contactUsAction.contactUs.success( { contactUs: contactUs } ) )
}

const getCompanyProfile = function* getCompanyProfile() {
  yield put( companyProfileAction.companyProfile.request() )
  const companyProfile = yield call( getFireBaseByRef, 'companyProfile' )

  yield put(
    companyProfileAction.companyProfile.success( {
      companyProfile: companyProfile,
    } )
  )
}

const getHouseCategories = function* getHouseCategories() {
  yield put( houseCategoriesAction.houseCategories.request() )
  const houseCategories = yield call( getFireBaseByRef, 'houseCategories' )
  const normalizedHouseCategories = yield call(
    houseCategoriesNormalized.normalizedHouseCategories,
    houseCategories
  )
  yield put(
    houseCategoriesAction.houseCategories.success( normalizedHouseCategories )
  )
}

const getServices = function* getServices() {
  yield put( servicesAction.services.request() )
  const services = yield call( getFireBaseByRef, 'services' )
  const normalizedServices = yield call(
    servicesNormalized.normalizedServices,
    services
  )
  yield put( servicesAction.services.success( normalizedServices ) )
}

const getSolutionCategories = function* getSolutionCategories() {
  yield put( solutionCategoriesAction.solutionCategories.request() )
  const solutionCategories = yield call( getFireBaseByRef, 'solutionCategories' )
  const normalizedSolutionCategories = yield call(
    solutionCategoriesNormalized.normalizedSolutionCategories,
    solutionCategories
  )
  yield put(
    solutionCategoriesAction.solutionCategories.success(
      normalizedSolutionCategories
    )
  )
}

const getSolutions = function* getSolutions() {
  yield put( solutionsAction.solutions.request() )
  const solutions = yield call( getFireBaseByRef, 'solutions' )
  const normalizedSolutions = yield call(
    solutionsNormalized.normalizedSolutions,
    solutions
  )
  yield put( solutionsAction.solutions.success( normalizedSolutions ) )
}

const allTask = function* allTask() {
  yield all( [
    yield fork( getAppConfigs ),
    yield fork( getCaseStudies ),
    yield fork( getCategories ),
    yield fork( getCompanyProfile ),
    yield fork( getContacts ),
    yield fork( getContactUs ),
    yield fork( getHouseCategories ),
    yield fork( getRicohTouches ),
    yield fork( getServices ),
    yield fork( getSolutionCategories ),
    yield fork( getSolutions ),
  ] )
}

const watchInitHomeScreen = function* watchInitHomeScreen() {
  while ( yield take( INIT_HOME_SCREEN ) ) {
    yield put( homeAction.request() )

    yield call( allTask )
    yield put( homeAction.success() )
  }
}

export default [ fork( watchInitHomeScreen ) ]
