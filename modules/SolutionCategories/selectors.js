import { createSelector } from 'reselect'

const currentSolutionCategorySelector = state =>
  state.solutionCategories.solutionCategory
const solutionCategoriesByIdSelector = state =>
  state.solutionCategories.solutionCategoriesById
const isFetchingSelector = state => state.solutionCategories.isFetching

const solutionCategySelector = createSelector(
  currentSolutionCategorySelector,
  solutionCategoriesByIdSelector,
  ( currentSolutionCategory, items ) => {
    return items[ currentSolutionCategory ]
  }
)

export {
  currentSolutionCategorySelector,
  isFetchingSelector,
  solutionCategoriesByIdSelector,
  solutionCategySelector,
}
