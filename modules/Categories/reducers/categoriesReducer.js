import { SET_CATEGORIES } from '../types'

export const INITIAL_STATE = {}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CATEGORIES:
    return { ...state, ...action.categories }
  default:
    return state
  }
}
