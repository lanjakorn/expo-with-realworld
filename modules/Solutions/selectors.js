import { createSelector } from 'reselect'

const currentSolutionSelector = state => state.solutions.solution
const solutionsByIdSelector = state => state.solutions.solutionsById
const isFetchingSelector = state => state.solutions.isFetching

const solutionsSelector = createSelector(
  currentSolutionSelector,
  solutionsByIdSelector,
  ( currentsolution, items ) => {
    return items[ currentsolution ]
  }
)

export {
  currentSolutionSelector,
  isFetchingSelector,
  solutionsByIdSelector,
  solutionsSelector,
}
