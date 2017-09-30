import { call, take, put, fork } from 'redux-saga/effects'
import { OTP_REQUEST, OTP_VERIFY } from './types'
import { otpRequest, otpVerify, getAuthToken } from './api'

import { actions as AuthAction } from 'modules/Auth'

const watchOTPRequest = function* watchOTPRequest() {
  while ( true ) {
    try {
      const { email } = yield take( OTP_REQUEST )
      yield put( AuthAction.Login.request() )
      const isValidEmail = yield call( otpRequest, email )
      yield put( AuthAction.Login.success( { isValidEmail, email } ) )
    } catch ( err ) {
      yield put( AuthAction.Login.failure( err ) )
    }
  }
}

const watchOTPVerify = function* watchOTPVerify() {
  while ( yield take( OTP_VERIFY ) ) {
    try {
      const { email, passCode } = yield take( OTP_VERIFY )
      console.log( email, passCode )
      yield put( AuthAction.Login.request() )
      const token = yield call( otpVerify, email, passCode )
      console.log( 'token', token )

      const uid = yield call( getAuthToken, token )
      console.log( 'uid: ', uid )

      yield put( AuthAction.Login.success( { uid, token } ) )
    } catch ( err ) {
      yield put( AuthAction.Login.failure( err ) )
    }
  }
}

export default [ fork( watchOTPRequest ), fork( watchOTPVerify ) ]
