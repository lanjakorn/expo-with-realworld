import { action } from 'utilities'
import {
  GET_SERVICES,
  INIT_SERVICES_SCREEN,
  SERVICES_FAILURE,
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SET_CURRENT_SERVICE,
  SET_SERVICES,
} from './types'

const getServices = services => action( GET_SERVICES, { services } )
const initServicesScreen = () => action( INIT_SERVICES_SCREEN )
const setServices = services => action( SET_SERVICES, { services } )
const setCurrentService = service => action( SET_CURRENT_SERVICE, { service } )

const services = {
  request: () => action( SERVICES_REQUEST ),
  success: services => action( SERVICES_SUCCESS, { services } ),
  failure: error => action( SERVICES_FAILURE, { error } ),
}

export {
  getServices,
  initServicesScreen,
  services,
  setCurrentService,
  setServices,
}
