import { action } from 'utilities'
import { GET_CATEGORIES, INIT_CATEGORIES_SCREEN } from './types'

const getCategories = () => action( GET_CATEGORIES )

const initCategoriesScreen = () => action( INIT_CATEGORIES_SCREEN )

export { getCategories, initCategoriesScreen }
