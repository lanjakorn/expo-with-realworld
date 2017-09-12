import { createSelector } from 'reselect'
import { faqsByIdSelector } from 'modules/Faqs/selectors'
import { contactsByIdSelector } from 'modules/Contacts/selectors'
import { currentCategorieQuerySelector } from 'modules/ProductCategories/selectors'
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

const contactIdsOfProductFromProductCategorySelector = createSelector(
  productOfProductCategorySelector,
  item => ( item ? item.contacts : [] )
)

const contactIdsOfProductFromSolutionCategorySelector = createSelector(
  productOfSolutionCategorySelector,
  item => ( item ? item.contacts : [] )
)

const faqIdsOfProductFromSolutionCategorySelector = createSelector(
  productOfSolutionCategorySelector,
  item => ( item ? item.faqs : [] )
)

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

// TODO: move to correct module
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

const contactOfProductFromProductCategorySelector = createSelector(
  contactIdsOfProductFromProductCategorySelector,
  contactsByIdSelector,
  ( contactIdsOfProduct, contactsMaster ) =>
    contactIdsOfProduct.length !== 0
      ? Object.keys( contactIdsOfProduct ).reduce(
        ( p, c ) => ( {
          ...p,
          [ contactIdsOfProduct[ c ] ]: contactsMaster[ contactIdsOfProduct[ c ] ],
        } ),
        {}
      )
      : {}
)

const contactOfProductFromSolutionCategorySelector = createSelector(
  contactIdsOfProductFromSolutionCategorySelector,
  contactsByIdSelector,
  ( contactIdsOfProduct, contactsMaster ) =>
    contactIdsOfProduct.length !== 0
      ? Object.keys( contactIdsOfProduct ).reduce(
        ( p, c ) => ( {
          ...p,
          [ contactIdsOfProduct[ c ] ]: contactsMaster[ contactIdsOfProduct[ c ] ],
        } ),
        {}
      )
      : {}
)

const getFirstContactOfProductFromProductCategorySelector = createSelector(
  contactOfProductFromProductCategorySelector,
  contactOfProduct =>
    Object.keys( contactOfProduct ).length !== 0
      ? contactOfProduct[ Object.keys( contactOfProduct )[ 0 ] ]
      : {}
)

const getFirstContactOfProductFromSolutionCategorySelector = createSelector(
  contactOfProductFromSolutionCategorySelector,
  contactOfProduct =>
    Object.keys( contactOfProduct ).length !== 0
      ? contactOfProduct[ Object.keys( contactOfProduct )[ 0 ] ]
      : {}
)

export {
  contactIdsOfProductFromSolutionCategorySelector,
  contactOfProductFromProductCategorySelector,
  contactOfProductFromSolutionCategorySelector,
  currentProductOfProductCategorySelector,
  currentProductOfSolutionCategorySelector,
  faqIdsOfProductFromProductCategorySelector,
  faqIdsOfProductFromSolutionCategorySelector,
  faqOfProductFromProductCategorySelector,
  faqOfProductFromSolutionCategorySelector,
  getFirstContactOfProductFromProductCategorySelector,
  getFirstContactOfProductFromSolutionCategorySelector,
  isFetchingSelector,
  productFilterByProductCategoriesSelector,
  productFilterBySolutionCategorySelector,
  productIdsSelector,
  productOfProductCategorySelector,
  productOfSolutionCategorySelector,
  productsByIdSelector,
  productsNameSelector,
  faqOfSolutionCategorySelector,
}
