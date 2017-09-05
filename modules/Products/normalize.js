import * as mocks from 'mocks/products'

const normalizedProducts = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      productsById: {},
      productIds: [],
    }

export { normalizedProducts }
