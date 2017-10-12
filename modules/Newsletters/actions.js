import {
  NEWSLETTERS_REQUEST,
  NEWSLETTERS_SUCCESS,
  NEWSLETTERS_FAILURE,
  SET_CURRENT_NEWSLETTER,
} from './types'

const action = ( type, payload = {} ) => ( { type, ...payload } )

const newsletters = {
  request: () => action( NEWSLETTERS_REQUEST ),
  success: newsletters => action( NEWSLETTERS_SUCCESS, { newsletters } ),
  failure: error => action( NEWSLETTERS_FAILURE, { error } ),
}

const setCurrentNewsletter = newsletter =>
  action( SET_CURRENT_NEWSLETTER, { newsletter } )

export { newsletters, setCurrentNewsletter }
