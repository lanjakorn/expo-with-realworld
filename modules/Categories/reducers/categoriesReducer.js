import { SET_CATEGORIES, SET_CURRENT_CATEGORIES } from '../types'

export const INITIAL_STATE = {
  categoriesById: {},
  categoryIds: [],
  childCatogoriesById: {},
  childCatogoryIds: [],
  subChildCatogoriesById: {},
  subChildCatogoryIds: [],
  categories: [],
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_CATEGORIES:
    return { ...state, ...action.categories }
  case SET_CURRENT_CATEGORIES:
    return {
      ...state,
      categories: [
        ...state.categories.slice( 0, action.startIndex ),
        action.categories,
      ],
    }
  default:
    return state
  }
}
