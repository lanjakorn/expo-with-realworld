import { all, call, fork, put, take } from 'redux-saga/effects'
import { INIT_HOME_SCREEN } from './types'
import { home as homeAction } from './actions'
import { firebaseDb } from 'services/firebase'

import {
  normalize as caseStudiesNormalized,
  actions as caseStudiesAction,
} from 'modules/CaseStudies'

import {
  normalize as categoriesNormalized,
  actions as categoriesAction,
} from 'modules/Categories'

import {
  normalize as contactsNormalized,
  actions as contactsAction,
} from 'modules/Contacts'

import {
  actions as companyProfileAction,
} from 'modules/CompanyProfile'

import {
  actions as contactUsAction,
} from 'modules/ContactUs'

import {
  normalize as faqsNormalized,
  actions as faqsAction,
} from 'modules/Faqs'

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

const getFireBaseByRef = db => {
  return new Promise( resolve => {
    firebaseDb.ref( db ).once( 'value', snap => {
      resolve( snap.val() )
    } )
  } )
}

function* getCaseStudies() {
  yield put( caseStudiesAction.caseStudies.request() )
  const caseStudies = yield call( getFireBaseByRef, 'caseStudies' )
  const normalizedCaseStudies = yield call(
    caseStudiesNormalized.normalizedCaseStudies,
    caseStudies
  )
  yield put( caseStudiesAction.caseStudies.success( normalizedCaseStudies ) )
}

function* getCategories() {
  yield put( categoriesAction.categories.request() )
  const categories = yield call( getFireBaseByRef, 'categories' )
  const normalizedCategories = yield call(
    categoriesNormalized.normalizedCategories,
    categories
  )
  yield put( categoriesAction.categories.success( normalizedCategories ) )
}

function* getContacts() {
  yield put( contactsAction.contacts.request() )
  const contacts = yield call( getFireBaseByRef, 'contacts' )
  const normalizedContacts = yield call(
    contactsNormalized.normalizedContacts,
    contacts
  )
  yield put( contactsAction.contacts.success( normalizedContacts ) )
}

function* getContactUs() {
  yield put( contactsAction.contacts.request() )
  const contactUs = yield call( getFireBaseByRef, 'contactUs' )
  yield put( contactUsAction.contactUs.success( { contactUs: contactUs } ) )
}

function* getCompanyProfile() {
  yield put( companyProfileAction.companyProfile.request() )
  const companyProfile = yield call( getFireBaseByRef, 'companyProfile' )

  yield put(
    companyProfileAction.companyProfile.success( {
      companyProfile: companyProfile,
    } )
  )
}

function* getFaqs() {
  yield put( faqsAction.faqs.request() )
  const faqs = yield call( getFireBaseByRef, 'faqs' )
  const normalizedFaqs = yield call( faqsNormalized.normalizedFaqs, faqs )
  yield put( faqsAction.faqs.success( normalizedFaqs ) )
}

function* getHouseCategories() {
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

function* getServices() {
  yield put( servicesAction.services.request() )
  const services = yield call( getFireBaseByRef, 'services' )
  const normalizedServices = yield call(
    servicesNormalized.normalizedServices,
    services
  )
  yield put( servicesAction.services.success( normalizedServices ) )
}

function* getSolutionCategories() {
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

function* getSolutions() {
  yield put( solutionsAction.solutions.request() )
  const solutions = yield call( getFireBaseByRef, 'solutions' )
  const normalizedSolutions = yield call(
    solutionsNormalized.normalizedSolutions,
    solutions
  )
  yield put( solutionsAction.solutions.success( normalizedSolutions ) )
}

function* watchInitHomeScreen() {
  while ( yield take( INIT_HOME_SCREEN ) ) {
    yield put( homeAction.request() )

    yield all( [
      yield fork( getCaseStudies ),
      yield fork( getCategories ),
      yield fork( getContacts ),
      yield fork( getCompanyProfile ),
      yield fork( getContactUs ),
      yield fork( getFaqs ),
      yield fork( getHouseCategories ),
      yield fork( getServices ),
      yield fork( getSolutionCategories ),
      yield fork( getSolutions ),
    ] )

    yield put( homeAction.success() )
  }
}

export default [ fork( watchInitHomeScreen ) ]
