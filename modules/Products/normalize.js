import * as mocks from 'mocks/products'
import { factories } from 'utilities'

const normalizedProducts = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        productsById: {
          ...p.productsById,
          [ c ]: {
            ...mocks.products( data[ c ] ),
            id: c,
          },
        },
        productIds: [ ...p.productIds, c ],
      }
    },
    {
      productsById: {},
      productIds: [],
    }
  )

export { normalizedProducts }
