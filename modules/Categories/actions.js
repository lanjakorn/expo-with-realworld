import { action } from 'utilities'
import { GET_CATEGORIES, INIT_CATEGORIES_SCREEN, SET_CATEGORIES } from './types'

const getCategories = categories => action( GET_CATEGORIES, { categories } )
const setCategories = categories => action( SET_CATEGORIES, { categories } )
const initCategoriesScreen = () => action( INIT_CATEGORIES_SCREEN )

export { getCategories, setCategories, initCategoriesScreen }
