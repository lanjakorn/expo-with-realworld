import { createSelector } from 'reselect'
// import { selectors as caseStudiesSelectors } from 'modules/CaseStudies'
// import { selectors as solutionsSelectors } from 'modules/Solutions'

const currentHouseCategoriesSelector = state =>
  state.houseCategories.houseCategory
const houseCategoriesByIdSelector = state =>
  state.houseCategories.houseCategoriesById
const houseCategoryIdsSelector = state => state.houseCategories.houseCategoryIds

const isFetchingCaseStudies = state => state.caseStudies.isFetching
const isFetchingSolutions = state => state.solutions.isFetching

const isFetchingSelector = createSelector(
  isFetchingCaseStudies,
  isFetchingSolutions,
  ( caseStudies, solutions ) => {
    return caseStudies || solutions ? true : false
  }
)

const houseCategoriesSelector = createSelector(
  currentHouseCategoriesSelector,
  houseCategoriesByIdSelector,
  ( curr, items ) => items[ curr ]
)

const houseCategoriesCaseStudiesSelector = createSelector(
  houseCategoriesSelector,
  item => item.caseStudies
)

const houseCategoriesSolutionsSelector = createSelector(
  houseCategoriesSelector,
  item => item.solutions
)

export {
  currentHouseCategoriesSelector,
  houseCategoriesByIdSelector,
  houseCategoriesCaseStudiesSelector,
  houseCategoriesSelector,
  houseCategoriesSolutionsSelector,
  houseCategoryIdsSelector,
  isFetchingSelector,
}
