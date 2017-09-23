import { createSelector } from 'reselect'

import { currentChildCategorieQuerySelector } from 'modules/ProductCategories/selectors'
import {
  currentProductOfProductCategorySelector,
  currentProductOfSolutionCategorySelector,
} from 'modules/Products/selectors'
import { currentSolutionCategorySelector } from 'modules/SolutionCategories/selectors'

const currentFaqSelector = state => state.faqs.faqs
const faqsByIdSelector = state => state.faqs.faqsById
const isAddFetchingSelector = state => state.faqs.isAddFetching
const isFetchingSelector = state => state.faqs.isFetching

const faqOfProductFromProductCategorySelector = createSelector(
  currentProductOfProductCategorySelector,
  faqsByIdSelector,
  ( currentProduct, faqsMaster ) => {
    return currentProduct
      ? Object.keys( faqsMaster ).reduce( ( p, c ) => {
        return faqsMaster[ c ].productId === currentProduct
          ? { ...p, [ c ]: faqsMaster[ c ] }
          : p
      }, {} )
      : {}
  }
)

const faqOfProductFromSolutionCategorySelector = createSelector(
  currentProductOfSolutionCategorySelector,
  faqsByIdSelector,
  ( currentSolutionCategory, faqsMaster ) => {
    return currentSolutionCategory
      ? Object.keys( faqsMaster ).reduce( ( p, c ) => {
        return faqsMaster[ c ].productId === currentSolutionCategory
          ? { ...p, [ c ]: faqsMaster[ c ] }
          : p
      }, {} )
      : {}
  }
)

const faqOfSolutionCategorySelector = createSelector(
  currentSolutionCategorySelector,
  faqsByIdSelector,
  ( currentSolutionCategory, faqsMaster ) => {
    return currentSolutionCategory
      ? Object.keys( faqsMaster ).reduce( ( p, c ) => {
        return faqsMaster[ c ].solutionCategoryId === currentSolutionCategory
          ? { ...p, [ c ]: faqsMaster[ c ] }
          : p
      }, {} )
      : {}
  }
)

const faqOfProductCategorySelector = createSelector(
  currentChildCategorieQuerySelector,
  faqsByIdSelector,
  ( currentChildCategorieProduct, faqsMaster ) => {
    return currentChildCategorieProduct
      ? Object.keys( faqsMaster ).reduce( ( p, c ) => {
        return faqsMaster[ c ].productCategories ===
          currentChildCategorieProduct
          ? { ...p, [ c ]: faqsMaster[ c ] }
          : p
      }, {} )
      : {}
  }
)

export {
  currentFaqSelector,
  faqOfProductCategorySelector,
  faqOfProductFromProductCategorySelector,
  faqOfProductFromSolutionCategorySelector,
  faqOfSolutionCategorySelector,
  faqsByIdSelector,
  isAddFetchingSelector,
  isFetchingSelector,
}
