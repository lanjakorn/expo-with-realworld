import { createSelector } from 'reselect'
import { faqsByIdSelector } from 'modules/Faqs/selectors'
import { currentCategorieQuerySelector } from 'modules/Categories/selectors'
import { currentSolutionCategorySelector } from 'modules/SolutionCategories/selectors'

const currentProductOfProductCategorySelector = state =>
  state.products.productIdOfProductCategory
const currentProductOfSolutionCategorySelector = state =>
  state.products.productIdOfSolutionCategory
const productsByIdSelector = state => state.products.productsById
const productIdsSelector = state => state.products.productIds
const isFetchingSelector = state => state.products.isFetching

const productsNameSelector = createSelector( productsByIdSelector, items =>
  Object.keys( items ).reduce( ( p, c ) => [ ...p, items[ c ] ], [] )
)

const productOfProductCategorySelector = createSelector(
  currentProductOfProductCategorySelector,
  productsByIdSelector,
  ( currentProduct, items ) => items[ currentProduct ]
)

const productOfSolutionCategorySelector = createSelector(
  currentProductOfSolutionCategorySelector,
  productsByIdSelector,
  ( currentProduct, items ) => items[ currentProduct ]
)

const productFilterByProductCategoriesSelector = createSelector(
  currentCategorieQuerySelector,
  productsByIdSelector,
  ( currentCategorieQuery, items ) =>
    Object.keys( items ).length !== 0
      ? Object.keys( items ).reduce(
        ( p, c ) =>
          items[ c ].categories === currentCategorieQuery
            ? { ...p, [ c ]: items[ c ] }
            : p,
        {}
      )
      : {}
)

const productFilterBySolutionCategorySelector = createSelector(
  currentSolutionCategorySelector,
  productsByIdSelector,
  ( currentSolutionCategory, items ) =>
    Object.keys( items ).length !== 0
      ? Object.keys( items ).reduce(
        ( p, c ) =>
          items[ c ].solutionCategories === currentSolutionCategory
            ? { ...p, [ c ]: items[ c ] }
            : p,
        {}
      )
      : {}
)

const faqIdsOfProductFromProductCategorySelector = createSelector(
  productOfProductCategorySelector,
  item => ( item ? item.faqs : [] )
)

const faqIdsOfProductFromSolutionCategorySelector = createSelector(
  productOfSolutionCategorySelector,
  item => ( item ? item.faqs : [] )
)

const faqOfProductFromProductCategorySelector = createSelector(
  faqIdsOfProductFromProductCategorySelector,
  faqsByIdSelector,
  ( faqIdsOfProduct, faqsMaster ) =>
    faqIdsOfProduct.length !== 0
      ? Object.keys( faqIdsOfProduct ).reduce(
        ( p, c ) => ( {
          ...p,
          [ faqIdsOfProduct[ c ] ]: faqsMaster[ faqIdsOfProduct[ c ] ],
        } ),
        {}
      )
      : {}
)

const faqOfProductFromSolutionCategorySelector = createSelector(
  faqIdsOfProductFromSolutionCategorySelector,
  faqsByIdSelector,
  ( faqIdsOfProduct, faqsMaster ) =>
    faqIdsOfProduct.length !== 0
      ? Object.keys( faqIdsOfProduct ).reduce(
        ( p, c ) => ( {
          ...p,
          [ faqIdsOfProduct[ c ] ]: faqsMaster[ faqIdsOfProduct[ c ] ],
        } ),
        {}
      )
      : {}
)

export {
  currentProductOfProductCategorySelector,
  currentProductOfSolutionCategorySelector,
  faqIdsOfProductFromProductCategorySelector,
  faqIdsOfProductFromSolutionCategorySelector,
  faqOfProductFromProductCategorySelector,
  faqOfProductFromSolutionCategorySelector,
  isFetchingSelector,
  productFilterByProductCategoriesSelector,
  productFilterBySolutionCategorySelector,
  productIdsSelector,
  productOfProductCategorySelector,
  productOfSolutionCategorySelector,
  productsByIdSelector,
  productsNameSelector,
}
