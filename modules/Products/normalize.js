const normalizedProducts = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
      ( p, c ) => ( {
        ...p,
        productsById: {
          ...p.productsById,
          [ c ]: {
            ...data[ c ],
            id: c,
          },
        },
        productIds: [ ...p.productIds, c ],
      } ),
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
