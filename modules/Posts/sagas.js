import { call, fork, put, take } from 'redux-saga/effects'
import { GET_SERVICES, INIT_SERVICES_SCREEN } from './types'
import { services as servicesAction } from './actions'
import { normalizedServices } from './normalize'
import { firebaseDb } from 'services/firebase'

function* watchGetServices() {
  while ( true ) {
    const { services } = yield take( GET_SERVICES )
    // const houseCategoriesServices = yield select(
    //   houseCategoriesSelectors.houseCategoriesServicesSelector
    // )
    const normalized = yield call( normalizedServices, services )
    yield put( servicesAction.success( normalized ) )
  }
}

const getServices = () => {
  return new Promise( resolve => {
    firebaseDb.ref( 'services' ).once( 'value', snap => {
      resolve( snap.val() )
    } )
  } )
}

function* watchInitServicesScreen() {
  while ( yield take( INIT_SERVICES_SCREEN ) ) {
    yield put( servicesAction.request() )
    const services = yield call( getServices )
    const normalized = yield call( normalizedServices, services )
    yield put( servicesAction.success( normalized ) )
  }
}

export default [ fork( watchGetServices ), fork( watchInitServicesScreen ) ]
