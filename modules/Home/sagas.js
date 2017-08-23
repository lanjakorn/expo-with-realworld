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
  normalize as contactUsNormalized,
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

function* watchInitHomeScreen() {
  while ( yield take( INIT_HOME_SCREEN ) ) {
    yield put( homeAction.request() )

    const [
      caseStudies,
      categories,
      contacts,
      contactUs,
      faqs,
      houseCategories,
      services,
      solutionCategories,
      solutions,
    ] = yield all( [
      yield call( getFireBaseByRef, 'caseStudies' ),
      yield call( getFireBaseByRef, 'categories' ),
      yield call( getFireBaseByRef, 'contacts' ),
      yield call( getFireBaseByRef, 'contactUs' ),
      yield call( getFireBaseByRef, 'faqs' ),
      yield call( getFireBaseByRef, 'houseCategories' ),
      yield call( getFireBaseByRef, 'services' ),
      yield call( getFireBaseByRef, 'solutionCategories' ),
      yield call( getFireBaseByRef, 'solutions' ),
    ] )

    const [
      normalizedCaseStudies,
      normalizedCategories,
      normalizedContacts,
      normalizedContactUs,
      normalizedFaqs,
      normalizedHouseCategories,
      normalizedServices,
      normalizedSolutionCategories,
      normalizedSolutions,
    ] = yield all( [
      yield call( caseStudiesNormalized.normalizedCaseStudies, caseStudies ),
      yield call( categoriesNormalized.normalizedCategories, categories ),
      yield call( contactsNormalized.normalizedContacts, contacts ),
      yield call( contactUsNormalized.normalizedContactUs, contactUs ),
      yield call( faqsNormalized.normalizedFaqs, faqs ),
      
      yield call(
        houseCategoriesNormalized.normalizedHouseCategories,
        houseCategories
      ),
      yield call( servicesNormalized.normalizedServices, services ),
      yield call(
        solutionCategoriesNormalized.normalizedSolutionCategories,
        solutionCategories
      ),

      yield call( solutionsNormalized.normalizedSolutions, solutions ),
    ] )

    yield all( [
      yield put( caseStudiesAction.caseStudies.success( normalizedCaseStudies ) ),
      yield put( categoriesAction.categories.success( normalizedCategories ) ),
      yield put( contactsAction.contacts.success( normalizedContacts ) ),
      yield put( contactUsAction.contactUs.success( normalizedContactUs ) ),
      yield put( faqsAction.faqs.success( normalizedFaqs ) ),
      yield put(
        houseCategoriesAction.houseCategories.success( normalizedHouseCategories )
      ),
      yield put( servicesAction.services.success( normalizedServices ) ),
      yield put(
        solutionCategoriesAction.solutionCategories.success(
          normalizedSolutionCategories
        )
      ),
      yield put( solutionsAction.solutions.success( normalizedSolutions ) ),
    ] )

    yield put( homeAction.success() )
  }
}

export default [ fork( watchInitHomeScreen ) ]
