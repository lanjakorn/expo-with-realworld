import {
  RICOH_TOUCHES_REQUEST,
  RICOH_TOUCHES_SUCCESS,
  RICOH_TOUCHES_FAILURE,
} from './types'

const action = ( type, payload = {} ) => ( { type, ...payload } )

const ricohTouches = {
  request: () => action( RICOH_TOUCHES_REQUEST ),
  success: ricohTouches => action( RICOH_TOUCHES_SUCCESS, { ricohTouches } ),
  failure: error => action( RICOH_TOUCHES_FAILURE, { error } ),
}

export { ricohTouches }
