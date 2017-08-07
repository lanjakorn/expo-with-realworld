import { action } from 'utilities'
import {
  GET_PRODUCTS,
  INIT_PRODUCTS_SCREEN,
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from './types'

const getProducts = products => action( GET_PRODUCTS, { products } )
const initProductsScreen = () => action( INIT_PRODUCTS_SCREEN )
const setProducts = products => action( SET_PRODUCTS, { products } )
const setCurrentProduct = id => action( SET_CURRENT_PRODUCT, { id } )

const products = {
  request: () => action( PRODUCTS_REQUEST ),
  success: products => action( PRODUCTS_SUCCESS, { products } ),
  failure: error => action( PRODUCTS_FAILURE, { error } ),
}

export {
  getProducts,
  initProductsScreen,
  setProducts,
  setCurrentProduct,
  products,
}
