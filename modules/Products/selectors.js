import { createSelector } from 'reselect'

const productsByIdSelector = state => state.products.productsById
const productIdsSelector = state => state.categories.productIds

const productsNameSelector = createSelector( productsByIdSelector, items => {
  return Object.keys( items ).reduce( ( p, c ) => {
    return [ ...p, items[ c ] ]
  }, [] )
} )

export { productsByIdSelector, productIdsSelector, productsNameSelector }
