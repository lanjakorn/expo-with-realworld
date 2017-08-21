const normalizedServices = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        servicesById: {
          ...p.servicesById,
          [ c ]: {
            ...data[ c ],
          },
        },
        serviceIds: [ ...p.serviceIds, c ],
      }
    },
    {
      servicesById: {},
      serviceIds: [],
    }
  )

export { normalizedServices }
