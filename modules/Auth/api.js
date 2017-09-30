import config from 'config'

import axios from 'axios'
import { firebaseAuth } from 'services/firebase'

const { firebase: { cf } } = config

const otpRequest = async email => {
  const res = await axios.post( `${ cf }/requestOneTimePassword`, { email } )
  if ( res.status === 200 ) {
    return true
  }
  return false
}

const otpVerify = async ( email, passCode ) => {
  console.log( 'otpVerify', email, passCode )
  const res = await axios.post( `${ cf }/verifyOneTimePassword`, {
    email,
    code: passCode,
  } )

  console.log( 'res', res )
  if ( res.status === 200 ) {
    return res.data.token
  }
  return res.data.error
}

const getAuthToken = async token => {
  console.log( 'sss', token )
  const { uid } = await firebaseAuth.signInWithCustomToken( token )
  return uid
}

export { otpRequest, otpVerify, getAuthToken }
