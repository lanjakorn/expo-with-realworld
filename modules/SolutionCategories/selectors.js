import { createSelector } from 'reselect'
import { faqsByIdSelector } from 'modules/Faqs/selectors'

const currentSolutionCategorySelector = state =>
  state.solutionCategories.solutionCategory
const solutionCategoriesByIdSelector = state =>
  state.solutionCategories.solutionCategoriesById
const isFetchingSelector = state => state.solutionCategories.isFetching

const solutionCategySelector = createSelector(
  currentSolutionCategorySelector,
  solutionCategoriesByIdSelector,
  ( currentSolutionCategory, items ) => items[ currentSolutionCategory ]
)

const faqIdsOfSolutionCategorySelector = createSelector(
  solutionCategySelector,
  item => item.faqs
)

const faqOfSolutionCategorySelector = createSelector(
  faqIdsOfSolutionCategorySelector,
  faqsByIdSelector,
  ( faqIdsOfSolutionCategory, faqsMaster ) =>
    Object.keys( faqIdsOfSolutionCategory ).length !== 0
      ? Object.keys( faqIdsOfSolutionCategory ).reduce(
        ( p, c ) => ( {
          ...p,
          [ faqIdsOfSolutionCategory[ c ] ]:
          faqsMaster[ faqIdsOfSolutionCategory[ c ] ],
        } ),
        {}
      )
      : {}
)

export {
  currentSolutionCategorySelector,
  faqIdsOfSolutionCategorySelector,
  faqOfSolutionCategorySelector,
  isFetchingSelector,
  solutionCategoriesByIdSelector,
  solutionCategySelector,
}
