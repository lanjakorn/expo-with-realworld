const normalizedServices = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      servicesById: {},
      serviceIds: [],
    }

export { normalizedServices }
