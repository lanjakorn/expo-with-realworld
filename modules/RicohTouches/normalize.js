const normalizedRicohTouches = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
      ( p, c ) => {
        return {
          ...p,
          ricohTouchesById: {
            ...p.ricohTouchesById,
            [ c ]: {
              ...data[ c ],
            },
          },
          ricohTouchesIds: [ ...p.ricohTouchesIds, c ],
        }
      },
      {
        ricohTouchesById: {},
        ricohTouchesIds: [],
      }
    )
    : {
      ricohTouchesById: {},
      ricohTouchesIds: [],
    }

export { normalizedRicohTouches }
