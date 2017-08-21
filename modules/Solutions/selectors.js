import { createSelector } from 'reselect'
import { solutionCategoriesByIdSelector } from 'modules/SolutionCategories/selectors'

const currentSolutionSelector = state => state.solutions.solution
const solutionsByIdSelector = state => state.solutions.solutionsById
const isFetchingSelector = state => state.solutions.isFetching

const solutionSelector = createSelector(
  currentSolutionSelector,
  solutionsByIdSelector,
  ( currentSolution, items ) => items[ currentSolution ]
)

const solutionCategoryIdsOfSolutionsSelector = createSelector(
  solutionSelector,
  item => item.solutionCategories
)

const isFetchingCaseStudies = state => state.caseStudies.isFetching
const isFetchingSolutionCategories = state =>
  state.solutionCategories.isFetching

const isFetchingCaseStudiesAndSolutionCategoriesSelector = createSelector(
  isFetchingCaseStudies,
  isFetchingSolutionCategories,
  ( caseStudies, solutionCategories ) =>
    caseStudies || solutionCategories ? true : false
)

const solutionCategorOfHouseCategorySelector = createSelector(
  solutionCategoryIdsOfSolutionsSelector,
  solutionCategoriesByIdSelector,
  ( solutionCategoryIdsOfSolution, solutionCategoriesMaster ) =>
    Object.keys( solutionCategoryIdsOfSolution ).length !== 0
      ? Object.keys( solutionCategoryIdsOfSolution ).reduce(
        ( p, c ) => ( {
          ...p,
          [ solutionCategoryIdsOfSolution[ c ] ]:
          solutionCategoriesMaster[ solutionCategoryIdsOfSolution[ c ] ],
        } ),
        {}
      )
      : {}
)

export {
  currentSolutionSelector,
  isFetchingCaseStudiesAndSolutionCategoriesSelector,
  isFetchingSelector,
  solutionCategorOfHouseCategorySelector,
  solutionCategoryIdsOfSolutionsSelector,
  solutionsByIdSelector,
  solutionSelector,
}
