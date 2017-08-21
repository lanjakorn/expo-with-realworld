import { action } from 'utilities'
import {
  GET_SOLUTIONS,
  INIT_SOLUTIONS_SCREEN,
  SET_CURRENT_SOLUTION,
  SET_SOLUTIONS,
  SOLUTIONS_FAILURE,
  SOLUTIONS_REQUEST,
  SOLUTIONS_SUCCESS,
} from './types'

const getSolutions = solutions => action( GET_SOLUTIONS, { solutions } )
const initSolutionsScreen = () => action( INIT_SOLUTIONS_SCREEN )
const setSolutions = solutions => action( SET_SOLUTIONS, { solutions } )
const setCurrentSolutions = ( solution, startIndex ) =>
  action( SET_CURRENT_SOLUTION, { solution, startIndex } )

const solutions = {
  request: () => action( SOLUTIONS_REQUEST ),
  success: solutions => action( SOLUTIONS_SUCCESS, { solutions } ),
  failure: error => action( SOLUTIONS_FAILURE, { error } ),
}

export {
  getSolutions,
  initSolutionsScreen,
  setCurrentSolutions,
  setSolutions,
  solutions,
}
