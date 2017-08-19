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
  ( currentSolutionCategory, items ) => {
    return items[ currentSolutionCategory ]
  }
)

const faqIdsOfSolutionCategorySelector = createSelector(
  solutionCategySelector,
  item => item.faqs
)

const faqOfSolutionCategorySelector = createSelector(
  faqIdsOfSolutionCategorySelector,
  faqsByIdSelector,
  ( faqIdsOfSolutionCategory, faqsMaster ) =>
    Object.keys( faqIdsOfSolutionCategory ).reduce(
      ( p, c ) => ( {
        ...p,
        [ faqIdsOfSolutionCategory[ c ] ]: faqsMaster[ faqIdsOfSolutionCategory[ c ] ],
      } ),
      {}
    )
)

export {
  currentSolutionCategorySelector,
  isFetchingSelector,
  solutionCategoriesByIdSelector,
  solutionCategySelector,
  faqIdsOfSolutionCategorySelector,
  faqOfSolutionCategorySelector,
}
