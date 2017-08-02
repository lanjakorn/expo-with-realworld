import { createSelector } from 'reselect'

const categoriesByIdSelector = state => state.categories.categoriesById
const categoryIdsSelector = state => state.categories.categoryIds

const categoriesNameSelector = createSelector( categoriesByIdSelector, items => {
  return Object.keys( items ).reduce( ( p, c ) => {
    return [ ...p, items[ c ] ]
  }, [] )
} )

export { categoriesNameSelector, categoryIdsSelector }
