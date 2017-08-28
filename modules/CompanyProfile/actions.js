import { action } from 'utilities'
import {
  COMPANY_PROFILE_FAILURE,
  COMPANY_PROFILE_REQUEST,
  COMPANY_PROFILE_SUCCESS,
  GET_COMPANY_PROFILE,
  INIT_COMPANY_PROFILE_SCREEN,
  SET_COMPANY_PROFILE,
} from './types'

const getCompanyProfile = companyProfile => action( GET_COMPANY_PROFILE, { companyProfile } )
const initCompanyProfileScreen = () => action( INIT_COMPANY_PROFILE_SCREEN )
const setCompanyProfile = companyProfile => action( SET_COMPANY_PROFILE, { companyProfile } )

const companyProfile = {
  request: () => action( COMPANY_PROFILE_REQUEST ),
  success: companyProfile => action( COMPANY_PROFILE_SUCCESS, { companyProfile } ),
  failure: error => action( COMPANY_PROFILE_FAILURE, { error } ),
}

export {
  companyProfile,
  getCompanyProfile,
  initCompanyProfileScreen,
  setCompanyProfile,
}
