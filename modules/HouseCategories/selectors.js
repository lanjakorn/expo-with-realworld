import { createSelector } from 'reselect'
import {
  caseStudiesByIdSelector,
  isFetchingSelector as isFetchingCaseStudies,
} from 'modules/CaseStudies/selectors'
import {
  solutionsByIdSelector,
  isFetchingSelector as isFetchingSolutions,
} from 'modules/Solutions/selectors'

const currentHouseCategorySelector = state =>
  state.houseCategories.houseCategory
const houseCategoriesByIdSelector = state =>
  state.houseCategories.houseCategoriesById
const houseCategoryIdsSelector = state => state.houseCategories.houseCategoryIds

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

const caseStudyIdsOfHouseCategorySelector = createSelector(
  houseCategorySelector,
  item => item.caseStudies
)

const caseStudyOfHouseCategorySelector = createSelector(
  caseStudyIdsOfHouseCategorySelector,
  caseStudiesByIdSelector,
  ( caseStudyIdsOfHouseCategory, caseStudiesMaster ) =>
    Object.keys( caseStudyIdsOfHouseCategory ).reduce(
      ( p, c ) => ( {
        ...p,
        [ caseStudyIdsOfHouseCategory[ c ] ]:
        caseStudiesMaster[ caseStudyIdsOfHouseCategory[ c ] ],
      } ),
      {}
    )
)

const solutionIdsOfHouseCategorySelector = createSelector(
  houseCategorySelector,
  item => item.solutions
)

const solutionOfHouseCategorySelector = createSelector(
  solutionIdsOfHouseCategorySelector,
  solutionsByIdSelector,
  ( solutionIdsOfHouseCategory, solutionsMaster ) =>
    Object.keys( solutionIdsOfHouseCategory ).reduce(
      ( p, c ) => ( {
        ...p,
        [ solutionIdsOfHouseCategory[ c ] ]:
        solutionsMaster[ solutionIdsOfHouseCategory[ c ] ],
      } ),
      {}
    )
)

export {
  caseStudyIdsOfHouseCategorySelector,
  caseStudyOfHouseCategorySelector,
  currentHouseCategorySelector,
  houseCategoriesByIdSelector,
  houseCategoryIdsSelector,
  houseCategorySelector,
  isFetchingCaseStudiesAndSolutionsSelector,
  isFetchingSelector,
  solutionIdsOfHouseCategorySelector,
  solutionOfHouseCategorySelector,
}
