import { action } from 'utilities'
import {
  INIT_HOME_SCREEN,
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
} from './types'

const initHomeScreen = () => action( INIT_HOME_SCREEN )

const home = {
  request: () => action( HOME_REQUEST ),
  success: () => action( HOME_SUCCESS ),
  failure: error => action( HOME_FAILURE, { error } ),
}

export { initHomeScreen, home }
