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
      yield put( AuthAction.Login.failure( err.response.data.error ) )
    }
  }
}

const watchOTPVerify = function* watchOTPVerify() {
  while ( true ) {
    try {
      const { email, passCode, navigation } = yield take( OTP_VERIFY )
      yield put( AuthAction.Login.request() )
      const token = yield call( otpVerify, email, passCode )
      const uid = yield call( getAuthToken, token )

      yield put( AuthAction.Login.success( { passCode, uid, token } ) )
      navigation.navigate( 'homes' )
    } catch ( err ) {
      yield put( AuthAction.Login.failure( err.response.data.error ) )
    }
  }
}

export default [ fork( watchOTPRequest ), fork( watchOTPVerify ) ]
