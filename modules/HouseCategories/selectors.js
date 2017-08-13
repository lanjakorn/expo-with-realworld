import { createSelector } from 'reselect'

const currentHouseCategoriesSelector = state =>
  state.houseCategories.houseCategories
const houseCategoriesByIdSelector = state =>
  state.houseCategories.houseCategoriesById
const houseCategoryIdsSelector = state => state.houseCategories.houseCategoryIds
const isFetchingSelector = state => state.houseCategories.isFetching

const houseCategoryelector = createSelector(
  currentHouseCategoriesSelector,
  houseCategoriesByIdSelector,
  ( curr, items ) => items[ curr ]
)

export {
  currentHouseCategoriesSelector,
  houseCategoriesByIdSelector,
  houseCategoryIdsSelector,
  houseCategoryelector,
  isFetchingSelector,
}
