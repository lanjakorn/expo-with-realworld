import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types'

const action = ( type, payload = {} ) => ( { type, ...payload } )

const Login = {
  request: () => action( LOGIN_REQUEST ),
  success: profile => action( LOGIN_SUCCESS, { profile } ),
  failure: error => action( LOGIN_FAILURE, { error } ),
}

export { Login }
