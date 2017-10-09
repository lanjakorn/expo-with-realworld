import {
  APP_CONFIGS_REQUEST,
  APP_CONFIGS_SUCCESS,
  APP_CONFIGS_FAILURE,
} from './types'

const action = ( type, payload = {} ) => ( { type, ...payload } )

const appConfigs = {
  request: () => action( APP_CONFIGS_REQUEST ),
  success: appConfigs => action( APP_CONFIGS_SUCCESS, { appConfigs } ),
  failure: error => action( APP_CONFIGS_FAILURE, { error } ),
}

export { appConfigs }
