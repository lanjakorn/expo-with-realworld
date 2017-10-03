import { action } from 'utilities'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  OTP_REQUEST,
  OTP_VERIFY,
} from './types'

const otpRequest = email => action( OTP_REQUEST, { email } )
const otpVerify = ( email, passCode, navigation ) =>
  action( OTP_VERIFY, { email, passCode, navigation } )

const Login = {
  request: () => action( LOGIN_REQUEST ),
  success: profile => action( LOGIN_SUCCESS, { profile } ),
  failure: error => action( LOGIN_FAILURE, { error } ),
}

export { Login, otpRequest, otpVerify }
