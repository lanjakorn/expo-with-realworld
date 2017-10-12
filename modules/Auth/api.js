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
  const res = await axios.post( `${ cf }/verifyOneTimePassword`, {
    email,
    code: passCode,
  } )

  if ( res.status === 200 ) {
    console.log( res.data.token )
    return res.data.token
  }
  return res.data.error
}

const getAuthToken = async token => {
  const res = await firebaseAuth.signInWithCustomToken( token )
  console.log( 'res: ', res )
  return res.uid
}

export { otpRequest, otpVerify, getAuthToken }
