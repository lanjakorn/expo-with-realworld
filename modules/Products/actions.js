import { action } from 'utilities'
import { GET_PRODUCTS, INIT_PRODUCTS_SCREEN, SET_PRODUCTS } from './types'

const getProducts = products => action( GET_PRODUCTS, { products } )
const initProductsScreen = () => action( INIT_PRODUCTS_SCREEN )
const setProducts = products => action( SET_PRODUCTS, { products } )

export { getProducts, initProductsScreen, setProducts }
