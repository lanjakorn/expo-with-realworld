import { action } from 'utilities'
import {
  GET_PRODUCTS_BY_SOLUTION_CATEGORY,
  GET_PRODUCTS,
  INIT_PRODUCTS_SCREEN,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SET_CURRENT_PRODUCT_OF_PRODUCT_CATEGORY,
  SET_CURRENT_PRODUCT_OF_SOLUTION_CATEGORY,
  SET_PRODUCTS,
} from './types'

const getProducts = products => action( GET_PRODUCTS, { products } )
const getProductsBySolutionCategory = solutionCategory =>
  action( GET_PRODUCTS_BY_SOLUTION_CATEGORY, { solutionCategory } )
const initProductsScreen = () => action( INIT_PRODUCTS_SCREEN )
const setProducts = products => action( SET_PRODUCTS, { products } )
const setCurrentProductOfProductCategory = id =>
  action( SET_CURRENT_PRODUCT_OF_PRODUCT_CATEGORY, { id } )
const setCurrentProductOfSolutionCategory = id =>
  action( SET_CURRENT_PRODUCT_OF_SOLUTION_CATEGORY, { id } )

const products = {
  request: () => action( PRODUCTS_REQUEST ),
  success: products => action( PRODUCTS_SUCCESS, { products } ),
  failure: error => action( PRODUCTS_FAILURE, { error } ),
}

export {
  getProducts,
  getProductsBySolutionCategory,
  initProductsScreen,
  products,
  setCurrentProductOfProductCategory,
  setCurrentProductOfSolutionCategory,
  setProducts,
}
