import { eventChannel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import { GET_CONTACTS, INIT_CONTACTS_SCREEN } from './types'
import { contacts as contactsAction } from './actions'
import { normalizedContacts } from './normalize'
import { subscribeEvent } from './subscribeEvent'

function subscribe() {
  return eventChannel( emit => subscribeEvent.subscribe( emit ) )
}

function* read() {
  const channel = yield call( subscribe )
  while ( true ) {
    const action = yield take( channel )
    yield put( action )
  }
}

function* watchGetContacts() {
  while ( true ) {
    const { contacts } = yield take( GET_CONTACTS )
    // const houseCategoriesContacts = yield select(
    //   houseCategoriesSelectors.houseCategoriesContactsSelector
    // )
    const normalized = yield call( normalizedContacts, contacts )
    yield put( contactsAction.success( normalized ) )
  }
}

function* watchInitContactsScreen() {
  while ( yield take( INIT_CONTACTS_SCREEN ) ) {
    yield put( contactsAction.request() )
    subscribeEvent.path = 'contacts'

    yield fork( read )
  }
}

export default [ fork( watchGetContacts ), fork( watchInitContactsScreen ) ]
