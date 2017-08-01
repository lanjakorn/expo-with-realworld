import { action } from 'utilities'
import { GET_CATEGORIES, INIT_CATEGORIES_SCREEN } from './types'

const getCategories = categories => action( GET_CATEGORIES, { categories } )
const initCategoriesScreen = () => action( INIT_CATEGORIES_SCREEN )

export { getCategories, initCategoriesScreen }
