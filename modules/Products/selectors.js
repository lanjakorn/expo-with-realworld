import { createSelector } from 'reselect'
import { faqsByIdSelector } from 'modules/Faqs/selectors'

const currentProductSelector = state => state.products.productId
const productsByIdSelector = state => state.products.productsById
const productIdsSelector = state => state.categories.productIds

const productsNameSelector = createSelector( productsByIdSelector, items => {
  return Object.keys( items ).reduce( ( p, c ) => {
    return [ ...p, items[ c ] ]
  }, [] )
} )

const productSelector = createSelector(
  currentProductSelector,
  productsByIdSelector,
  ( currentProduct, items ) => {
    return items[ currentProduct ]
  }
)

const faqIdsOfProductSelector = createSelector(
  productSelector,
  item => item.faqs
)

const faqOfProductSelector = createSelector(
  faqIdsOfProductSelector,
  faqsByIdSelector,
  ( faqIdsOfProduct, faqsMaster ) =>
    Object.keys( faqIdsOfProduct ).reduce(
      ( p, c ) => ( {
        ...p,
        [ faqIdsOfProduct[ c ] ]: faqsMaster[ faqIdsOfProduct[ c ] ],
      } ),
      {}
    )
)

export {
  productIdsSelector,
  productsByIdSelector,
  productSelector,
  productsNameSelector,
  faqIdsOfProductSelector,
  faqOfProductSelector,
}
