import { createSelector } from 'reselect'
import {
  faqsByIdSelector,
  isFetchingSelector as isFetchingFaqsSelector,
} from 'modules/Faqs/selectors'

const currentSolutionCategorySelector = state =>
  state.solutionCategories.solutionCategory
const solutionCategoriesByIdSelector = state =>
  state.solutionCategories.solutionCategoriesById
const isFetchingSelector = state => state.solutionCategories.isFetching

const solutionCategorySelector = createSelector(
  currentSolutionCategorySelector,
  solutionCategoriesByIdSelector,
  ( currentSolutionCategory, items ) => items[ currentSolutionCategory ]
)

const faqIdsOfSolutionCategorySelector = createSelector(
  solutionCategorySelector,
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

// TODO: move selector to correct module
const isFetchingProductsSelector = state => state.products.isFetching

const isFetchingProductsAndFaqsSelector = createSelector(
  isFetchingProductsSelector,
  isFetchingFaqsSelector,
  ( products, faqs ) => {
    return products || faqs ? true : false
  }
)

export {
  currentSolutionCategorySelector,
  faqIdsOfSolutionCategorySelector,
  faqOfSolutionCategorySelector,
  isFetchingSelector,
  solutionCategoriesByIdSelector,
  solutionCategorySelector,
  isFetchingProductsAndFaqsSelector,
}
