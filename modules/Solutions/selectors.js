import { createSelector } from 'reselect'

const currentSolutionSelector = state => state.solutions.solution
const solutionsByIdSelector = state => state.solutions.solutionsById
const isFetchingSelector = state => state.solutions.isFetching

const solutionSelector = createSelector(
  currentSolutionSelector,
  solutionsByIdSelector,
  ( currentSolution, items ) => {
    return items[ currentSolution ]
  }
)

const solutionCategoriesOfSolutionsSelector = createSelector(
  solutionSelector,
  item => item.solutionCategories
)

const isFetchingCaseStudies = state => state.caseStudies.isFetching
const isFetchingSolutionCategories = state =>
  state.solutionCategories.isFetching

const isFetchingCaseStudiesAndSolutionCategoriesSelector = createSelector(
  isFetchingCaseStudies,
  isFetchingSolutionCategories,
  ( caseStudies, solutionCategories ) => {
    return caseStudies || solutionCategories ? true : false
  }
)
export {
  currentSolutionSelector,
  isFetchingSelector,
  solutionsByIdSelector,
  solutionSelector,
  solutionCategoriesOfSolutionsSelector,
  isFetchingCaseStudiesAndSolutionCategoriesSelector,
}
