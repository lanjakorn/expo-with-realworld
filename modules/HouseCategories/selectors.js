import { createSelector } from 'reselect'
// import { selectors as caseStudiesSelectors } from 'modules/CaseStudies'
// import { selectors as solutionsSelectors } from 'modules/Solutions'

const currentHouseCategorySelector = state =>
  state.houseCategories.houseCategory
const houseCategoriesByIdSelector = state =>
  state.houseCategories.houseCategoriesById
const houseCategoryIdsSelector = state => state.houseCategories.houseCategoryIds

const isFetchingCaseStudies = state => state.caseStudies.isFetching
const isFetchingSolutions = state => state.solutions.isFetching

const isFetchingSelector = state => state.houseCategories.isFetching

const isFetchingCaseStudiesAndSolutionsSelector = createSelector(
  isFetchingCaseStudies,
  isFetchingSolutions,
  ( caseStudies, solutions ) => {
    return caseStudies || solutions ? true : false
  }
)

const houseCategorySelector = createSelector(
  currentHouseCategorySelector,
  houseCategoriesByIdSelector,
  ( curr, items ) => items[ curr ]
)

const houseCategoriesCaseStudiesSelector = createSelector(
  houseCategorySelector,
  item => item.caseStudies
)

const houseCategoriesSolutionsSelector = createSelector(
  houseCategorySelector,
  item => item.solutions
)

export {
  currentHouseCategorySelector,
  houseCategoriesByIdSelector,
  houseCategoriesCaseStudiesSelector,
  houseCategorySelector,
  houseCategoriesSolutionsSelector,
  houseCategoryIdsSelector,
  isFetchingSelector,
  isFetchingCaseStudiesAndSolutionsSelector,
}
