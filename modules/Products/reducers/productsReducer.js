import { SET_PRODUCTS } from '../types'
import { types } from 'modules/Categories'

const { SET_CURRENT_CATEGORIES } = types

export const INITIAL_STATE = {
  productsById: {},
  productIds: [],
  products: [],
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_PRODUCTS:
    return { ...state, ...action.products }
  case SET_CURRENT_CATEGORIES:
    return { ...state, ...INITIAL_STATE }
  default:
    return state
  }
}
