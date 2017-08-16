import { action } from 'utilities'
import {
  SOLUTION_CATEGORIES_FAILURE,
  SOLUTION_CATEGORIES_REQUEST,
  SOLUTION_CATEGORIES_SUCCESS,
  GET_SOLUTION_CATEGORIES,
  INIT_SOLUTION_CATEGORIES_SCREEN,
  SET_CURRENT_SOLUTION_CATEGORY,
  SET_SOLUTION_CATEGORIES,
} from './types'

const getSolutionCategories = solutionCategories =>
  action( GET_SOLUTION_CATEGORIES, { solutionCategories } )
const initSolutionCategoriesScreen = () =>
  action( INIT_SOLUTION_CATEGORIES_SCREEN )
const setSolutionCategories = solutionCategories =>
  action( SET_SOLUTION_CATEGORIES, { solutionCategories } )
const setCurrentSolutionCategory = solutionCategory =>
  action( SET_CURRENT_SOLUTION_CATEGORY, { solutionCategory } )

const solutionCategories = {
  request: () => action( SOLUTION_CATEGORIES_REQUEST ),
  success: solutionCategories =>
    action( SOLUTION_CATEGORIES_SUCCESS, { solutionCategories } ),
  failure: error => action( SOLUTION_CATEGORIES_FAILURE, { error } ),
}

export {
  solutionCategories,
  getSolutionCategories,
  initSolutionCategoriesScreen,
  setCurrentSolutionCategory,
  setSolutionCategories,
}
