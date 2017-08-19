import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SET_CURRENT_PRODUCT,
  SET_PRODUCTS,
} from '../types'
import { types } from 'modules/Categories'

const { SET_CURRENT_CATEGORIES } = types

export const INITIAL_STATE = {
  productsById: {},
  productIds: [],
  productId: '',
  isFetching: false,
  errorMessage: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_PRODUCTS:
    return { ...state, ...action.products }
  case PRODUCTS_REQUEST:
    return { ...state, isFetching: true }
  case PRODUCTS_SUCCESS:
    return {
      ...state,
      productsById: {
        ...state.productsById,
        ...action.products.productsById,
      },
      productIds: [
        ...state.productIds,
        ...action.products.productIds.reduce(
          ( p, c ) =>
            state.productIds.some( oldItem => oldItem === c ) ? p : [ ...p, c ],
          []
        ),
      ],
      isFetching: false,
    }
  case PRODUCTS_FAILURE:
    return { ...state, isFetching: false, errorMessage: action.error }
    // case SET_CURRENT_CATEGORIES:
    //   return { ...state, ...INITIAL_STATE }
  case SET_CURRENT_PRODUCT:
    return { ...state, productId: action.id }
  default:
    return state
  }
}
