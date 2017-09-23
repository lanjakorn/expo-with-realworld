import { call, take, put, fork } from 'redux-saga/effects'

import { Login } from './actions'
import { LOGIN_REQUEST } from './types'

const fetchApi = () => {
  return new Promise( resolve => {
    resolve( { email: 'test@ricoh.com' } )
  } )
}

function* fetchLogin() {
  while ( yield take( LOGIN_REQUEST ) ) {
    try {
      const userProfile = yield call( fetchApi )
      yield put( Login.success( userProfile ) )
    } catch ( e ) {
      yield put( Login.failure( e ) )
    }
  }
}

export default [ fork( fetchLogin ) ]
