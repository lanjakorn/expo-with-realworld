import { createSelector } from 'reselect'

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

export {
  productsByIdSelector,
  productIdsSelector,
  productsNameSelector,
  productSelector,
}
